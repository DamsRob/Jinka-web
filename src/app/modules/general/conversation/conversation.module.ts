import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConversationComponent } from './conversation.component';
import { MenuModule } from '../menu/menu.module';
import { ConversationRoutingModule } from './conversation-routing-module';



@NgModule({
  declarations: [
    ConversationComponent
  ],
  imports: [
    CommonModule,
    MenuModule,
    ConversationRoutingModule
  ],
  exports: [
    ConversationComponent
  ]
})
export class ConversationModule { }
