---
publish: true
tags: 
permalink: 2025.0129.1704.04
date: 2025-01-29
---
Spring Boot `application properties yaml`을 운영환경마다 다르게 구성할텐데, 이미지로 빌드할 때
- 이미지 빌드 하기 전에 예상되는 환경마다 `application properties yaml`을 미리 만들어 이미지에 넣고 환경변수 등으로 기동 시 선택되게 하든지
- 필요한 환경마다 각각 이미지를 빌드 하든지
- `application properties yaml`에서 변경이 예상되는 부분을 모조리 환경변수로 빼든지

하는 것이 일반적일 듯 싶다. 하나같이 다 불편하다.

`application properties yaml`을 `configmap`으로 구성하여 `pod`에 `volume` 마운트 하면 이런 불편이 일거에 해소된다.
아래는 Helm 예시이다. 실제 `application properties yaml` 내용은 `values.yaml`의 `applicationProperties` 항목에 기술한다.
# Helm chart
## values.yaml (예시)
```yaml
volumes: []
volumeMounts: []

applicationProperties:  
  spring:  
    datasource:  
        url: jdbc:postgresql://myvm.mshome.net:5432/mydb  
        username: postgres  
        password: mypw007  
        driver-class-name: org.postgresql.Driver  
    jpa:  
        hibernate:  
        ddl-auto: update  
        show-sql: true  
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
  application.yml: |  
    {{- toYaml .Values.applicationProperties | nindent 4 }}  
{{- end }}
```
## deployment.yaml
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
              mountPath: /app/application.yml  
              subPath: application.yml  
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
              - key: application.yml  
                path: application.yml  
        {{- end }}  
      {{- end }}
```
# 생성되는 Manifest yaml
## configmap-application-properties.yaml (예시) 
```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: myapp-application-configmap
  ...
data:
  application.yml: |
	spring:  
	datasource:  
		url: jdbc:postgresql://myvm.mshome.net:5432/mydb  
		username: postgres  
		password: mypw007  
		driver-class-name: org.postgresql.Driver  
	jpa:  
		hibernate:  
		ddl-auto: update  
		show-sql: true  
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
              mountPath: /app/application.yml
              subPath: application.yml
      volumes:
        - name: application-properties-volume
          configMap:
            defaultMode: 420
            name: myapp-application-configmap
            items:
              - key: application.yml
                path: application.yml
```
