import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewSearchComponent } from './new-search.component';
import { NewSearchRoutingModule } from './new-search-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'



@NgModule({
  declarations: [
    NewSearchComponent
  ],
  imports: [
    CommonModule,
    NewSearchRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class NewSearchModule { }
