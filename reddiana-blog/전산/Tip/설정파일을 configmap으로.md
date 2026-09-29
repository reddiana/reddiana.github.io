---
publish: true
tags:
  - SpringBoot
  - K8s
  - configmap
  - helm
permalink: 2025.0129.1704.04
date: 2025-01-29
---
설정파일을 이미지에 포함시켜 배포할 때, 운영환경마다 다른 설정파일이 필요한 경우 조금 난감하다. 예를 들어 Spring Boot `application properties`를 운영환경마다 다르게 구성할텐데, 이미지 빌드할 때
- 예상되는 환경(개발/검증/운영 등) 마다 `application properties`를 만들어 이미지에 모두 넣고 환경변수 등으로 기동 시 선택되게 하든지
- 필요한 환경 마다 각각 이미지를 빌드 하든지
- `application properties`에서 변경이 예상되는 부분을 모조리 환경변수로 빼든지

하는 것이 일반적일 듯 싶다. 하나같이 다 불편하다.

`application properties`가 많이 복잡하고 배포되는 환경마다 생긴 모양이 꽤 다를 경우 `configmap`으로 구성하여 `pod`에 `volume` 마운트 하면 이런 불편이 일거에 해소된다. 진짜 편함. 

# Manifest yaml
## configmap.yaml (예시) 
실제 `application properties` 내용을 `data`의 `application.yaml` 항목에 기술한다.
```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: myapp-application-configmap
  ...
data:
  application.yaml: |
    spring:  
      datasource:  
        url: jdbc:postgresql://myvm.mshome.net:5432/mydb  
        username: ${USERNAME}
        password: ${PASSWORD}
        driver-class-name: org.postgresql.Driver  
      jpa:  
        ddl-auto: update  
        show-sql: true  
    logging:
      level:  
        org.springframework.kafka: INFO  
        com.haha.myapp: DEBUG
```
## deployment.yaml
``` yaml
apiVersion: apps/v1
kind: Deployment
  ...
spec:
  ...
  template:
    ...
    spec:
      ...
      containers:
        - name: myapp
          ...
          volumeMounts:
            - name: application-properties-volume
              mountPath: /app/application.yaml
              subPath: application.yaml
      volumes:
        - name: application-properties-volume
          configMap:
            defaultMode: 420
            name: myapp-application-configmap
            items:
              - key: application.yaml
                path: application.yaml
```

# Helm chart
Helm chart로 구성한 예시는 다음과 같다.
## values.yaml (예시)
실제 `application properties` 내용을 `values.yaml`의 `applicationProperties` 항목에 기술한다.
```yaml
volumes: []
volumeMounts: []

applicationProperties:  
  spring:  
    datasource:  
      url: jdbc:postgresql://myvm.mshome.net:5432/mydb  
      username: ${USERNAME}  
      password: ${PASSWORD}  
      driver-class-name: org.postgresql.Driver  
    jpa:  
      ddl-auto: update  
      show-sql: true  
  logging:
    level:  
      org.springframework.kafka: INFO  
      com.haha.myapp: DEBUG
```
## configmap-application-properties.yaml
```go
{{- if .Values.applicationProperties }}  
apiVersion: v1  
kind: ConfigMap  
metadata:  
  name: {{ .Release.Name }}-application-configmap  
  labels:  
    {{- include "myapp.labels" . | nindent 4 }}  
data:  
  application.yaml: |  
    {{- toYaml .Values.applicationProperties | nindent 4 }}  
{{- end }}
```
## deployment.yaml
`mountPath`는 각자의 이미지에 맞게 설정하시라.
```go
spec:  
  ...
  template:  
    ...
    spec:  
      ...
      containers:  
        - name: {{ .Chart.Name }}  
          ...
          {{- if or .Values.volumeMounts .Values.applicationProperties }}  
          volumeMounts:  
            {{- with .Values.volumeMounts }}  
            {{- toYaml . | nindent 12 }}  
            {{- end }}  
            {{- with .Values.applicationProperties }}  
            - name: application-properties-volume  
              mountPath: /app/application.yaml  
              subPath: application.yaml  
            {{- end }}  
          {{- end }}  
      {{- if or .Values.volumeMounts .Values.applicationProperties }}  
      volumes:  
        {{- with .Values.volumes }}  
        {{- toYaml . | nindent 8 }}  
        {{- end }}  
        {{- if .Values.applicationProperties }}  
        - name: application-properties-volume  
          configMap:  
            defaultMode: 420  
            name: {{ .Release.Name }}-application-configmap  
            items:  
              - key: application.yaml  
                path: application.yaml  
        {{- end }}  
      {{- end }}
```
