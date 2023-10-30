import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MenuModule } from '../menu/menu.module';
import { StoreModule } from '@ngrx/store';
import { realEstateAddReducer, realEstateAddsReducer } from 'src/app/store/reducers/realEstadeAdd.reducers';
import { userReducer } from 'src/app/store/reducers/user.reducers';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MenuModule,
    StoreModule.forRoot({
      realEstateAdds: realEstateAddsReducer,
      realEstateAdd: realEstateAddReducer,
      user: userReducer
    })
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
