import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubscribeRoutingModule } from './subscribe-routing.module';
import { SubscribeComponent } from './subscribe.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { userReducer, usersReducer } from 'src/app/store/reducers/user.reducers';

@NgModule({
  declarations: [
    SubscribeComponent
  ],
  imports: [
    CommonModule,
    SubscribeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      user: userReducer,
      users: usersReducer
    })
  ],
  exports:[
    SubscribeComponent
  ]
})
export class SubscribeModule { }
