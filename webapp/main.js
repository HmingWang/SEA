const {app, BrowserWindow} = require('electron')
const url = require("url");
const path = require("path");
const child = require('child_process');
const ffi = require('@breush/ffi-napi');

let mainWindow


function load_jvm(){


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
  splash.webContents.openDevTools();
  //----------------------------------
  console.log(path.join(__dirname),'!!!!!!!!!!!');
  // console.log(path.join(__dirname));
  let native = ffi.Library(path.join(__dirname, `/libserver/jvmlib.dll`),{
    initialize:["int", ["int","string","string","string","string"]],
    destroy:["bool",["void"]],
  });
  //
  native.initialize(8090,"",'','',"main");

  //----------------------------------
  // setTimeout(function () {
  //   splash.close();
  //   mainWindow.show();
  // }, 5000);

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

app.on('ready', function () {
  load_jvm();
  createWindow();
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  if (mainWindow === null) createWindow()
})


