---
publish: true
tags:
  - "#K8s"
  - "#Kubernetes"
date: 2025-02-05
permalink: 2025.0205.2341.45
---
K8s에서 실행된 Job의 상태와 결과를 판별하는 것은 은근히 번거롭다. Job과 Job으로 실행된 Pod의 Event, Job과 Pod의 Status, Pod Status 안에 있는 Pod Phase 및 Container State, Container State의 각각의 State에 대한 reason을 다 살펴봐야 만족스럽게 Job의 상태와 결과를 판별할 수 있다. Job의 각종 상태 정보로 단계를 ==(내 취향대로)== 정의하고 판별해보았다.
## Flag 정의
아래와 같이 단계와 결과를 판별하는데 도움이 될만한 Flag를 정의해보았다. 
![[k8s_job_status.png]]
%% [[k8s_job_status.drawio]] %%
## K8s Job의 단계와 결과 정의
K8s에서 실행된 Job의 단계와 결과를 ==(내 취향대로)== 아래와 같이 정의한다고 했을 때
![[Job 단계 State Diagram.png]]
## Flag로 Job 단계 및 결과 의 판별
아래와 같은 로직으로 Job의 단게와 결과를 판별해 볼 수 있다.
![[Job 단계 판별.png]]
![[Job Result 판별.png]]




