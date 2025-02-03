---
publish: true
tags:
  - SpringBoot
permalink: 2025.0201.2233.22
date: 2025-02-01
---
Spring Boot의 `@SpringBootApplication` 어노테이션 선언된 main과 상이한 패키지를 AutoConfiguration에 포함시키는 방법.
## 가령
- JAR로 배포되는 프레임워크의 패키지가 `com.mycom.myframework`이고
- `@SpringBootApplication` 어노테이션이 선언된 main의 패키지가 `com.haha.hoho.myapp`라고 할 때
- 종속성을 추가하는 것 외에 `@SpringBootApplication`쪽에 프레임워크에 관련된 선언을 아무 것도 추가하고 싶지 않다면

프레임워크의 JAR 안에 다음과 같이 스프링 부트의 자동 구성 메커니즘을 구성하면 된다.

## AutoConfiguration.imports
`META-INF/spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports`
자동 구성 클래스의 ==Full 클래스명==을 기술
``` 
com.mycom.myframework.config.MyConfig
```

## 자동 구성 클래스
`com.mycom.myframework.config.MyConfig`
```java
package com.mycom.myframework.config;

import org.springframework.boot.autoconfigure.AutoConfiguration;
import org.springframework.context.annotation.ComponentScan;

@AutoConfiguration
@ComponentScan(basePackages = "com.mycom.myframework")
public class MyConfig {
}
```

물론 `@SpringBootApplication` 어노테이션이 선언된 패키지의 `@ComponentScan` 어노테이션에 `com.mycom.myframework`을 추가로 설정해주는 것이 더 간편하다. 하지만, 위 "가령"에 기술한 요구사항을 만족시키려면 `AutoConfiguration.imports`를 사용해야한다.
## Ref.
실은 하나도 안 읽어봤는데 나중에 읽어보려고
- [Spring Boot Auto-Configuration](https://sundaland.tistory.com/398)
- [A Custom Auto-Configuration with Spring Boot | Baeldung](https://www.baeldung.com/spring-boot-custom-auto-configuration)
- [[Springboot] 스프링 부트 자동구성의 동작 원리 파헤쳐보기 (@SpringBootApplication, @EnableAutoConfiguratioin, @Import, AutoConfigurationImportSelector)](https://yeees.tistory.com/477)
- [Spring Boot의 Auto Configuration](https://yebali.tistory.com/90)
- [Spring-Boot의 동작원리 이해하기 (+ 자동구성, 라이브러리 잘 사용하기!)](https://jaehoney.tistory.com/348)
