---
publish: true
tags:
  - SpringBoot
permalink: 2025.0201.2233.22
date: 2025-02-01
---
Spring Boot의 `@SpringBootApplication` 어노테이션 선언된 main과 상이한 패키지를 AutoConfiguration에 포함시키는 방법.
가령, 
- JAR로 배포되는 프레임워크의 패키지가 `com.mycom.myframework`이고
- `@SpringBootApplication` 어노테이션이 선언된 main의 패키지가 `com.haha.hoho.myapp`라고 할 때
- 종속성을 추가하는 것 외에 `@SpringBootApplication`쪽에 프레임워크에 관련된 선언을 아무 것도 추가하고 싶지 않다면
프레임워크의 JAR 안에 다음과 같이 스프링 부트의 자동 구성 메커니즘을 구성하면 된다.

`META-INF/spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports`
자동 구성 클래스의 ==Full 클래스명==을 기술
``` 
com.mycom.myframework.config.MyConfig
```

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
