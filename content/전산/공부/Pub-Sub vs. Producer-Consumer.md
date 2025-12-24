---
publish: true
tags:
date: 2025-12-25
permalink: 2025.1225.0418.27
---
- **Pub/Sub**
	- 여러 Subscriber가 같은 메시지를 받음 
	- 일종의 브로드캐스트 (fan-out)
	- 예: 뉴스레터 발행 → 구독자 모두에게 전달.    
- **Producer/Consumer**
	- 보통 한 메시지를 한 Consumer만 처리 
	- 작업분산 (work distribution)
	- 예: 주문 처리 시스템 → 주문들을 큐에 넣고, 서버들이 나눠서 처리.
![[Pub-Sub vs. Producer-Consumer.svg]]