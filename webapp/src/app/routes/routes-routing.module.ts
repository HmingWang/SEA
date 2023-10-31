import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SplashComponent} from "../pages/splash/splash.component";
import {LayoutModule} from "../layout/layout.module";
import {BasicComponent} from "../layout/basic/basic.component";

const routes: Routes = [
  {path:'',component: BasicComponent},
  {path: 'splash', component: SplashComponent}
];

@NgModule({
  declarations: [],
  imports: [
    LayoutModule,
    CommonModule,
    RouterModule.forRoot(routes,{
      useHash:true
    })
  ]
})
export class RoutesRoutingModule {
}
