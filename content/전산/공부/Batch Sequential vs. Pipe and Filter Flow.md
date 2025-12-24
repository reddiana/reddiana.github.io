---
publish: true
tags:
date: 2025-10-12
permalink: 2025.1012.1614.53
---
![[Batch Sequentail vs. Pipe and Filter.svg]]
Batch Sequential을 쓸 수 밖에 없는 경우: 예를 들어 등수를 계산하는 로직이라든지 이동평균을 구하는 로직이 있다면 그 프로세스를 포함하는 Flow는 Pipe and Filter를 쓰지 못한다. 
Pipe and Filter 적용 시, Event Driven 아키텍처를 구현하여 Scale In/Out하기 용이하다. 아래 아키텍처에서 Process들을 Scale In/Out 하여 부하에 대응할 수 있다.
![[Pipe-and-Filter-by-Event-Driven.svg]]
위 다이어그램에서 Process가 Filter이고 Queue가 Pipe이다.
참고: Process에서 처리하는 개개의 건들이 대용량이면 Event Driven 아키텍처에서는 [Claim-Check pattern](https://learn.microsoft.com/en-us/azure/architecture/patterns/claim-check?utm_source=copilot.com)을 고려해볼 수 있다.