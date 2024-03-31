import {Component} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Injectable} from '@angular/core';
import {ipcRenderer, webFrame} from 'electron';
import * as childProcess from 'child_process';
import * as fs from 'fs';
import * as path from 'path';
// import {JvmService} from "../../services/jvm.service";
// import * as ffi from 'ffi-napi';
@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss']
})
export class SplashComponent {

  log_txt: string = '';
  // childProcess!: typeof childProcess;
  // ipcRenderer!: typeof ipcRenderer;
  // webFrame!: typeof webFrame;
  // fs!: typeof fs;
  // path!: typeof path;
  //
  // ffi: any;
  // napi;

  // springServer:JvmService;
  // napi;

  constructor(private router: Router, private activedRoute: ActivatedRoute) {
    // this.springServer=new JvmService();

    // this.ffi = (window as any).require('@breush/ffi-napi');
    // this.path = (window as any).require('path');

  }

  startServer() {

    // return this.napi.initialize(
    //   8090,
    //   '',
    //   "org/springframework/boot/loader/JarLauncher"
    // );  // this.springServer.initializeBackendVM();

    // this.ipcRenderer = (window as any).require('electron').ipcRenderer;
    // this.webFrame = (window as any).require('electron').webFrame;
    // this.fs = (window as any).require('fs');
    // this.childProcess = (window as any).require('child_process');

    // this.childProcess.exec('pwd ', (error, stdout, stderr) => {
    //   this.log_txt+=stdout;
    //   console.log(this.log_txt);
    //   this.router.navigate(['splash']);
    // });


    // this.childProcess.exec('pwd ', (error, stdout, stderr) => {
    //   if (error) {
    //     this.log_txt+=error;
    //     console.log(this.log_txt);
    //
    //     return;
    //   }
    //   if (stderr) {
    //     this.log_txt+=stderr;
    //     console.log(this.log_txt);
    //     return;
    //   }
    //   this.log_txt+=stdout;
    //   console.log(this.log_txt);
    //   //刷新
    //   this.router.navigate(['splash']);
    // });
  }

}
