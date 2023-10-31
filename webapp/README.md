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

* Electron 對於安全性設定非常嚴格，我們需要在 main.js 中建立 BrowserWindow 時，加上contextIsolation 安全性選項
* Angular项目的组织结构：
  * core 
    >考虑把那些数量庞大、辅助性的、只用一次的类收集到核心模块中，让特性模块的结构更清晰简明。  
      坚持把那些“只用一次”的类收集到 CoreModule 中，并对外隐藏它们的实现细节。简化的 AppModule 会导入 CoreModule，并且把它作为整个应用的总指挥。  
      坚持在 core 目录下创建一个名叫 CoreModule 的特性模块（例如在 app/core/core.module.ts 中定义 CoreModule）。  
      坚持把要共享给整个应用的单例服务放进 CoreModule 中（例如 ExceptionService 和 LoggerService）。  
      坚持导入 CoreModule 中的资产所需要的全部模块（例如 CommonModule 和 FormsModule）。  
  * shared
    > 和CoreModule相比，SharedModule正好相反，它不应该包含服务，因为SharedModule会在不同业务模块中导入，一旦包含了服务，就会产生不同的实例，有可能会对应用产生负面的影响，所以尽量保证服务的单一性。

    >AppModule应该 导入 SharedModule、CoreModule、LayoutModule、RouterModule、Angular 模块(例如：BrowserModule、BrowserAnimationsModule、HttpClientModule)；
LayoutModule应该 导入 SharedModule；  
LayoutModule应该 导出所有 layout component；  
LayoutModule不应该 导入和声明任何路由；  
RouterModule应该 导入 SharedModule、CoreModule、LayoutModule以及RouteRoutingModule；
CoreModule应该 只保留providers属性；  
SharedModule应该 包含 Angular 通用模块(例如：CommonModule、FormsModule、RouterModule、ReactiveFormsModule)、第三方通用依赖模块、所有组件（自己写的非业务相关的通用组件）、指令、管道；  
SharedModule应该导出所有包含模块；  
SharedModule不应该 有providers属性；  
Service应该 承担应用的数据操作和数据交互；  
Component应该 组织视图层的展示和服务计算数据的收集  
样式分层  

* 建立全局route 在 routes目录下，routers模块应该导出 routermodule 
```agsl
ng g module routes/routes-routing --flat
```
