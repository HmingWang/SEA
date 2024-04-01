'use strict';
const {app, BrowserWindow, createProtocol} = require('electron')
const url = require("url");
const path = require("path");
const {Server} = require("./server");


let mainWindow

let server;

function load_jvm() {
  server=new Server();
  server.initializeJavaProcess();

}

function createWindow() {

  //先 create splash 界面

  const splash = new BrowserWindow({
    width: 500,
    height: 300,
    transparent: true,
    frame: false,
    alwaysOnTop: true,
    webPreferences: {
      nodeIntegration: true,
      //使得node函数可以在rander进程中使用，避免出现如下错误： window.require is not a function
      contextIsolation: false,//讓在 preload.js 的定義可以傳遞到 Render Process
    }
  });
  splash.loadURL(
    url.format({
      pathname: path.join(__dirname, `/dist/webapp/index.html`),
      protocol: "file:",
      slashes: true,
      hash: '/splash'
    }));

  splash.center();
  // splash.webContents.openDevTools();
  setTimeout(function () {
    splash.close();
    mainWindow.show();
  }, 10000);

  //主窗口
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    show: false,// 先不显示主界面，显示 splash 界面
    webPreferences: {
      nodeIntegration: true,
      //使得node函数可以在rander进程中使用，避免出现如下错误： window.require is not a function
      contextIsolation: false,//讓在 preload.js 的定義可以傳遞到 Render Process
    }
  });

  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, `/dist/webapp/index.html`),
      protocol: "file:",
      slashes: true
    })
  );
  // Open the DevTools.
  mainWindow.webContents.openDevTools()

  mainWindow.on('closed', function () {
    mainWindow = null

  })
}

app.on('ready', async () => {
  load_jvm();
  createWindow();
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    server.terminalJavaProcess();
    app.quit();
  }
})

app.on('activate', function () {
  if (mainWindow === null) createWindow()
})


