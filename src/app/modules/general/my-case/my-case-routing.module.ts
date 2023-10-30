import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyCaseComponent } from './my-case.component';

const routes: Routes = [{
  path:'', component: MyCaseComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyCaseRoutingModule { }
