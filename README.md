# SEA
A Springboot + Electron +Angular project framework

---
### 目录结构

1. webapp electron + angular 前端
2. server spring boot + gradle 后端

### 注意事项

1. windows要安装gradle 注意gradle和jdk的版本。

2. 生成一个jre  java runtime 
```
bin\jlink --module-path=.\jmods --add-modules=java.se --output .\backend
```