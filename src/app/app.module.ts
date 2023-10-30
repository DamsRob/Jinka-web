import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './modules/general/header/header.module';
import { ConditionsComponent } from './modules/general/conditions/conditions.component';
import { FirstComponent } from './modules/general/first/first.component';
import { PopUpComponent } from './modules/general/pop-up/pop-up.component';
import { Action } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent,
    ConditionsComponent,
    FirstComponent,
    PopUpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
