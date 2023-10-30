# Webapp

## 技术笔记

* 要使用node函数需要先安装node依赖,使用下面命令
```
npm i --save-dev @types/node
```
* child_process的4种模式
  * spawn: 启动一个子进程来执行命令； 
  * exec: 启动一个子进程来执行命令，与 spawn 不同的是，它有一个回调函数获知子进程的状况； 
  * execFile: 启动一个子进程来执行可执行文件； 
  * fork:与 spawn 类似，不同点在于它创建 Node 的子进程只需指定要执行的 JavaScript 文件模块即可；

