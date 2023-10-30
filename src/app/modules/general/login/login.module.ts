import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { StoreModule } from '@ngrx/store';
import { userReducer, usersReducer } from 'src/app/store/reducers/user.reducers';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      user: userReducer,
      users: usersReducer
    })
  ], 
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }
