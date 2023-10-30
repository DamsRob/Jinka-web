import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyCaseRoutingModule } from './my-case-routing.module';
import { MyCaseComponent } from './my-case.component';
import { MenuModule } from '../menu/menu.module';


@NgModule({
  declarations: [
    MyCaseComponent
  ],
  imports: [
    CommonModule,
    MyCaseRoutingModule,
    MenuModule
  ],
  exports: [
    MyCaseComponent
  ]
})
export class MyCaseModule { }
