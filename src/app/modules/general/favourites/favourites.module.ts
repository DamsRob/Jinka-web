import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavouritesComponent } from './favourites.component';
import { MenuModule } from '../menu/menu.module';
import { FavouritesRoutingModule } from './favourites-routing-module';
import { StoreModule } from '@ngrx/store';
import { userReducer } from 'src/app/store/reducers/user.reducers';



@NgModule({
  declarations: [
    FavouritesComponent
  ],
  imports: [
    CommonModule,
    MenuModule,
    FavouritesRoutingModule,
    StoreModule.forRoot({
      user: userReducer
    })
  ],
  exports:[
    FavouritesComponent
  ]
})
export class FavouritesModule { }
