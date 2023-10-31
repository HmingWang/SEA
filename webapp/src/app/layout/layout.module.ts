import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicComponent } from './basic/basic.component';
import { BlankComponent } from './blank/blank.component';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    BasicComponent,
    BlankComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
})
export class LayoutModule { }
