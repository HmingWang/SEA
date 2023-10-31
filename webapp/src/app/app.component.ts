import {Component} from '@angular/core';
import {Injectable} from '@angular/core';

// If you import a module but never use any of the imported values other than as TypeScript types,
// the resulting javascript file will look as if you never imported the module at all.
import {ipcRenderer, webFrame} from 'electron';
import * as childProcess from 'child_process';
import * as fs from 'fs';
import * as path from 'path';


@Component({
  selector: 'app-root',
  template: '<router-outlet/>',
  styles:[]
})
export class AppComponent {
  title = 'webapp';
  log_txt: string = '';
  childProcess!: typeof childProcess;
  ipcRenderer!: typeof ipcRenderer;
  webFrame!: typeof webFrame;
  fs!: typeof fs;

  startServer() {

    this.ipcRenderer = (window as any).require('electron').ipcRenderer;
    this.webFrame = (window as any).require('electron').webFrame;
    this.fs = (window as any).require('fs');
    this.childProcess = (window as any).require('child_process');
    this.childProcess.exec('sh ./dist/webapp/assets/my.sh', (error, stdout, stderr) => {
      if (error) {
        console.log(error);

        this.log_txt+=error;
        return;
      }
      if (stderr) {
        console.log(stderr);

        this.log_txt+=stderr;
        return;
      }
      this.log_txt+=stdout;
      console.log(stdout);
    });
  }

  // get isElectron(): boolean {
  //   return !!(window && window.process && window.process.type);
  // }
}
