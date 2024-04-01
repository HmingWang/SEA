'use strict';

const ffi = require('@breush/ffi-napi');
const path = require("path");
const {app} = require('electron');
const child_process = require('child_process');


class Server {
  native;
  napi_path;
  jre_path;
  jar_path;
  java_path;
  main_class;
  vm_opts;
  appPath;
  child;

  constructor() {
    /**
     * __dirname 对于electron打包后是asar的路径,对于未打包的是webapp根路径
     * getPath('exe') 获取当前应用程序路径
     *
     * getAppPath
     */
    this.appPath = app.isPackaged ? path.dirname(app.getPath('exe')) + '/resources' : app.getAppPath();
    this.napi_path = path.resolve(this.appPath, "./libserver/jvmlib.dll");
    this.jre_path = path.resolve(this.appPath, './libserver/jre/bin');
    this.java_path = this.jre_path + '/java.exe';
    this.jar_path = path.resolve(this.appPath, './libserver/server-0.0.1-SNAPSHOT.jar');
    this.main_class = 'org/springframework/boot/loader/launch/JarLauncher';
    this.vm_opts = '--Xmx1024m';

    console.log('Jvm path : ', this.napi_path);
    console.log('Jre path : ', this.jre_path);
    console.log('Jar path : ', this.jar_path);


    this.native = ffi.Library(this.napi_path, {
      initialize: ["int", ["string", "string", "string", "string"]],
      destroy: ["bool", ["void"]],
    });
  }

  initializeJavaProcess() {
    this.child = child_process.spawn(this.java_path, ['-jar', this.jar_path]);
    this.child.stdout.pipe(process.stdout);
    this.child.stderr.pipe(process.stderr);

    process.on('SIGINT', () => {
      console.log('主进程结束');
      this.terminalJavaProcess();
      process.exit();
    });

    this.child.on('exit',(code)=>{
      console.log('子进程退出代码：{}',code);
    });
  }

  terminalJavaProcess() {
    console.log('正在结束子进程...');
    this.child.kill('SIGINT');
    console.log('子进程结束');
  }

  initializeJavaVM() {
    this.native.initialize(
      // JavaRuntime的二进制文件路径，一般没有必要修改。
      this.jre_path,
      // 类路径
      this.jar_path,
      // VMOptions
      this.vm_opts,
      // Main Class
      this.main_class
    );
  }

  destroyBackendVM() {
    return this.native.destroy(null)
  }
}


module.exports = {Server};

