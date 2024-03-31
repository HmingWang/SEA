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
3. electron 21之后开启内存隔离模式，因此使用ffi-napi会有问题，需要用  
   "@breush/ffi-napi": "^4.0.13",  
   "@breush/ref-napi": "^4.0.9",  
替代。
4. 如果调用lib出现193错误，是dll位数不对。