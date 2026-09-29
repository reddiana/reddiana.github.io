---
publish: true
tags:
  - 아키텍처
date: 2025-10-12
permalink: 2025.1012.1614.53
---
![[Batch Sequentail vs. Pipe and Filter.svg]]
- Batch Sequential을 쓸 수 밖에 없는 경우: 예를 들어 등수를 계산하는 로직이 있다면 그 프로세스를 포함하는 Flow는 Pipe and Filter를 쓰지 못한다. 
- Pipe and Filter 적용 시, [[Publisher-Subscriber vs. Producer-Consumer|Producer-Consumer]] 아키텍처를 구현하여 Scale In/Out하기 용이하다. 아래 아키텍처에서 Process들을 Scale In/Out 하여 부하에 대응할 수 있다.

![[Pipe-and-Filter-by-Event-Driven.svg]]
- 위 다이어그램에서 Process가 Filter이고 Queue가 Pipe이다.
- 참고: 
	- [파이프 및 필터 패턴 - Azure Architecture Center | Microsoft Learn](https://learn.microsoft.com/ko-kr/azure/architecture/patterns/pipes-and-filters)
	- Process에서 처리하는 개개의 건(메시지)들이 대용량이면 Event Driven 아키텍처에서는 [Claim-Check pattern](https://learn.microsoft.com/ko-kr/azure/architecture/patterns/claim-check)을 고려해볼 수 있다.
	- Unix의 pipe가 Pipe and Filter 패턴의 시조인 듯 [Pipes and Filters in Linux/Unix - GeeksforGeeks](https://www.geeksforgeeks.org/linux-unix/pipes-and-filters-in-linux-unix/)
	- [Batch Sequential va. Pipe and Filter Flow](https://www.perplexity.ai/search/batch-sequential-va-pipe-and-f-QH1UjTtzRwOpnm7g.YR91A#0)