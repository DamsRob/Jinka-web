import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsRoutingModule } from './details-routing.module';
import { DetailsComponent } from './details.component';
import { MenuModule } from '../menu/menu.module';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    DetailsComponent
  ],
  imports: [
    CommonModule,
    DetailsRoutingModule,
    MenuModule,
    MatDialogModule
  ],
  exports: [ 
    DetailsComponent
  ]
})
export class DetailsModule { }
