---
publish: true
tags: 
permalink: 2024.0923.2113.38
date: 2024-09-23
---
### GitHub Personal access tokens
- [GitHub Error: Authentication Failed from the Command Line](https://medium.com/@ginnyfahs/github-error-authentication-failed-from-command-line-3a545bfd0ca8)
	- 사용자 Settings > Developer settings > Personal access tokens

### 비밀번호 그만 물어보기
- [Git pull/push 시 Password 물어보지 않도록 설정하기(credential.helper)](https://www.hahwul.com/2018/08/git-credential-helper.html)
```bash
git config credential.helper store
```
    
### 변경 추적    
```bash
git config log.follow true
```
    
### status 한글파일명 유니코드로 나올 때
```sh
git config --global core.quotepath false
```

### 구찮지    
```bash
git config --global user.email "everlearningemployee@gmail.com"
git config --global user.name "빨강달"
```
### 내부 참조(reference)
Git은 모든 브랜치, 태그, 리모트 참조 등을 .git/refs/ 디렉토리 아래에 계층적으로 저장한다. 주요 네임스페이스는 다음과 같다:
- `refs/heads/`: 로컬 브랜치 (예: `refs/heads/main`은 `main` 브랜치).
- `refs/tags/`: 태그 (예: `refs/tags/v1.0`은 `v1.0` 태그).
- `refs/remotes/`: 리모트 레포지토리의 브랜치 (예: `refs/remotes/origin/main`은 `origin` 리모트의 `main` 브랜치).
- 기타: `refs/notes/`, `refs/stash/` 등 특수 참조도 존재.
#### 사용예
- 
```bash
git checkout refs/heads/main
git show-ref
```
- [[Kaniko]]의 ```--context=git://github.com/username/repository.git#refs/heads/main:subfolder```

![[gitGud.png]]