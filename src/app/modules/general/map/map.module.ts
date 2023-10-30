import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map.component';
import { MenuModule } from '../menu/menu.module';
import { MapRoutingModule } from './map-routing-module';



@NgModule({
  declarations: [
    MapComponent
  ],
  imports: [
    CommonModule,
    MenuModule,
    MapRoutingModule
  ],
  exports:[
    MapComponent
  ]
})
export class MapModule { }
