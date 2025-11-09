---
publish: true
tags: 
date: 2025-07-01
permalink: 2025.0701.1816.22
---
Hazelcast 5.5 버전부터 Lock 객체가 유료버전에서만 사용 가능하다.[^1] 아래 코드는 Map[^2]에 lock을 걸었다.
람다 메소드를 사용하여 공통모듈로 만듬. Spring AOP가 편리한데 public 메소드에만 적용가능하기 때문에 탈락
```java
import com.hazelcast.core.HazelcastInstance;  
import lombok.RequiredArgsConstructor;  
import lombok.extern.slf4j.Slf4j;  
import org.springframework.stereotype.Component;
import java.util.function.Supplier;  
  
@Component  
@RequiredArgsConstructor  
@Slf4j  
public class DistributedLockExecutor {  
    private final HazelcastInstance hazelcastInstance;  
  
    public <T> T execute(String lockName, String logStr, Supplier<T> supplier) {  
        return executeWithLock(lockName, logStr, supplier);  
    }  
  
    public void execute(String lockName, String logStr, Runnable runnable) {  
        executeWithLock(lockName, logStr, () -> {  
            runnable.run();  
            return null;  
        });  
    }  
  
    private <T> T executeWithLock(String lockName, String logStr, Supplier<T> supplier) {  
        var lockMap = hazelcastInstance.getMap(lockName);  
        try {  
            lockMap.lock(lockName);  
            log.info("Acquired lock: [{}][{}]", lockName, logStr);  
            return supplier.get();  
        } catch (Exception e) {  
            log.error("Error executing task with lock: {}", lockName, e);  
            throw e;  
        } finally {  
            lockMap.unlock(lockName);  
            log.info("Released lock: [{}][{}]", lockName, logStr);  
        }  
    }  
}
```

```yaml
spring:  
  hazelcast:  
    config: classpath:hazelcast.yaml
```

```yaml
hazelcast:  
  instance-name: hazelcast-instance  
  network:  
    port:  
      port: 5701  
    join:  
      multicast:  
        enabled: false  
      tcp-ip:  
        enabled: true  
        member-list:  
          - 127.0.0.1:5701
```

```java
@SpringBootTest  
class DistributedLockExecutorTest {  
    @Autowired  
    private HazelcastInstance hazelcastInstance;  
    @Autowired  
    private DistributedLockExecutor distributedLockExecutor;  
  
     @Test  
     void testLock() throws Exception {  
         Thread thread1 = new Thread(() -> {  
             String logStr = "lockTest#1";  
             distributedLockExecutor.execute("testLock", logStr,  
                     () -> testRun(logStr));  
         });  
         thread1.start();  
  
         Thread thread2 = new Thread(() -> {  
             String logStr = "lockTest#2";  
             distributedLockExecutor.execute("testLock", logStr,  
                     () -> testRun(logStr));  
         });  
         thread2.start();  
  
         thread1.join();  
         thread2.join();  
     }  
  
     @Test  
     void justTest() throws Exception {  
         Thread thread1 = new Thread(() -> {  
             testRun("justTest#1");  
         });  
         thread1.start();  
  
         Thread thread2 = new Thread(() -> {  
             testRun("justTest#2");  
         });  
         thread2.start();  
  
         thread1.join();  
         thread2.join();  
     }  
  
     void testRun(String myName) {  
         try {  
             for (int i = 0; i < 10; i++) {  
                 System.out.println("Hello, " + myName + "! This is message number " + (i + 1));  
                 Thread.sleep(1000);  
             }  
         } catch (InterruptedException e) {  
             Thread.currentThread().interrupt();
             System.err.println("Thread was interrupted: " + e.getMessage());  
         }  
     }  
}
```

```
Hello, justTest#1! This is message number 1
Hello, justTest#2! This is message number 1
Hello, justTest#2! This is message number 2
Hello, justTest#1! This is message number 2
Hello, justTest#2! This is message number 3
Hello, justTest#1! This is message number 3
Hello, justTest#2! This is message number 4
Hello, justTest#1! This is message number 4
Hello, justTest#2! This is message number 5
Hello, justTest#1! This is message number 5
Hello, justTest#2! This is message number 6
Hello, justTest#1! This is message number 6
Hello, justTest#2! This is message number 7
Hello, justTest#1! This is message number 7
Hello, justTest#2! This is message number 8
Hello, justTest#1! This is message number 8
Hello, justTest#2! This is message number 9
Hello, justTest#1! This is message number 9
Hello, justTest#2! This is message number 10
Hello, justTest#1! This is message number 10
```

```
2025-07-01T21:28:09.440+09:00  INFO 16224 --- [       Thread-7] org.example.DistributedLockExecutor      : Acquired lock: [testLock][lockTest#2]
Hello, lockTest#2! This is message number 1
Hello, lockTest#2! This is message number 2
Hello, lockTest#2! This is message number 3
Hello, lockTest#2! This is message number 4
Hello, lockTest#2! This is message number 5
Hello, lockTest#2! This is message number 6
Hello, lockTest#2! This is message number 7
Hello, lockTest#2! This is message number 8
Hello, lockTest#2! This is message number 9
Hello, lockTest#2! This is message number 10
2025-07-01T21:28:19.551+09:00  INFO 16224 --- [       Thread-7] org.example.DistributedLockExecutor      : Released lock: [testLock][lockTest#2]
2025-07-01T21:28:19.552+09:00  INFO 16224 --- [       Thread-6] org.example.DistributedLockExecutor      : Acquired lock: [testLock][lockTest#1]
Hello, lockTest#1! This is message number 1
Hello, lockTest#1! This is message number 2
Hello, lockTest#1! This is message number 3
Hello, lockTest#1! This is message number 4
Hello, lockTest#1! This is message number 5
Hello, lockTest#1! This is message number 6
Hello, lockTest#1! This is message number 7
Hello, lockTest#1! This is message number 8
Hello, lockTest#1! This is message number 9
Hello, lockTest#1! This is message number 10
2025-07-01T21:28:29.643+09:00  INFO 16224 --- [       Thread-6] org.example.DistributedLockExecutor      : Released lock: [testLock][lockTest#1]
```

[^1]: https://docs.hazelcast.com/hazelcast/5.5/data-structures/fencedlock
[^2]: https://docs.hazelcast.com/hazelcast/5.5/data-structures/locking-maps