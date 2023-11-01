import {Component} from '@angular/core';



@Component({
  selector: 'app-root',
  template: '<router-outlet/>',
  styles:[]
})
export class AppComponent {
  title = 'webapp';



  // get isElectron(): boolean {
  //   return !!(window && window.process && window.process.type);
  // }
}
