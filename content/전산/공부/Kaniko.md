---
publish: true
tags: 
date: 2025-05-28
permalink: 2025.0528.2131.49
---
# Example
```yaml
apiVersion: v1
kind: Pod
metadata:
  name: kaniko
spec:
  containers:
  - name: kaniko
    image: gcr.io/kaniko-project/executor:latest
    args:
    - "--dockerfile=Dockerfile"
    - "--context=git://github.com/username/repository.git#refs/heads/main:subfolder"
    - "--destination=myregistry.example.com/myimage:latest"
    volumeMounts:
    - name: docker-config
      mountPath: "/kaniko/.docker"
  volumes:
  - name: docker-config
    secret:
      secretName: registry-credentials
```

```bash
kubectl create secret generic registry-credentials \
  --from-literal=REGISTRY_USER=myuser \
  --from-literal=REGISTRY_PASSWORD=mypassword
```
