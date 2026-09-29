---
permalink: 2026.0530.2026.21
publish: true
date: 2026-05-30
tags:
---
개발 ubuntu VM 새로 만들면
# 유틸 설치
```sh
sudo apt update

sudo apt install bash-completion

# k8s
sudo snap install helm --classic
sudo snap install kubectl --classic
wget https://github.com/derailed/k9s/releases/latest/download/k9s_linux_amd64.deb && \
sudo apt install ./k9s_linux_amd64.deb

# zoxide 디렉토리 이
sudo apt install zoxide
sudo apt install fzf

# Starship 셸 프롬프트 커스텀
curl -sS https://starship.rs/install.sh | sh

# cat 명령어 유사 예쁘게 출력
sudo apt install bat

# Nerd Font
mkdir -p ~/.local/share/fonts
cd ~/.local/share/fonts
# Nerd Font 다운로드 및 압축 해제 예를 들어 FiraMono라면
wget https://github.com/ryanoasis/nerd-fonts/releases/download/v3.4.0/FiraMono.zip
unzip FiraMono.zip
fc-cache -fv
fc-list | grep -i fira
```
# .bashrc
```bash
set -o vi
export EDITOR=vim

alias h=helm
alias k=kubectl
alias k9s='LANG=C.UTF-8 k9s'
alias d=docker
alias dc='docker compose'

alias h='history'

alias ls='eza'
alias lt='eza --tree'
alias llt='ll --tree'

alias bat='batcat'
alias b='batcat'
alias c='batcat'
alias catt='batcat'

if [ -f /etc/bash_completion ]; then
    source /etc/bash_completion

    if command -v helm >/dev/null 2>&1; then
        source <(helm completion bash)
        complete -o default -F __start_helm h
    fi

    if command -v kubectl >/dev/null 2>&1; then
        source <(kubectl completion bash)
        complete -o default -F __start_kubectl k
    fi

    if command -v docker >/dev/null 2>&1; then
        source <(docker completion bash 2>/dev/null || docker bash-completion 2>/dev/null)
        complete -o default -F __start_docker d
    fi
fi

eval "$(zoxide init bash)"

eval "$(starship init bash)"
```
# Docker 설치
https://grok.com/share/bGVnYWN5_75331add-ac3f-4bae-95b1-4f852cbb2883