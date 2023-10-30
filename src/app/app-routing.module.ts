import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConditionsComponent } from './modules/general/conditions/conditions.component';
import { FirstComponent } from './modules/general/first/first.component';

const routes: Routes = [
  {path: 'login', loadChildren:()=> import('./modules/general/login/login.module').then(m=>m.LoginModule)},
  {path: 'subscribe', loadChildren: ()=> import('./modules/general/subscribe/subscribe.module').then(m=>m.SubscribeModule)},
  {path: 'search', loadChildren: () => import('./modules/general/search/search.module').then(m=>m.SearchModule)},
  {path: 'home', loadChildren: () => import('./modules/general/home/home.module').then(m=>m.HomeModule)},
  {path: 'home/:id', loadChildren:()=> import('./modules/general/details/details.module').then(m=>m.DetailsModule)},
  {path: 'my-case', loadChildren:()=>import('./modules/general/my-case/my-case.module').then(m=>m.MyCaseModule)},
  {path: 'account', loadChildren:()=>import('./modules/general/account/account.module').then(m=>m.AccountModule)},
  {path: 'conditions', component: ConditionsComponent},
  {path: 'conversation', loadChildren:()=> import('./modules/general/conversation/conversation.module').then(m=>m.ConversationModule)},
  {path: 'favourites', loadChildren:()=> import('./modules/general/favourites/favourites.module').then(m=>m.FavouritesModule)},
  {path: 'map', loadChildren:()=> import('./modules/general/map/map.module').then(m=>m.MapModule)},
  {path: 'new-search', loadChildren:()=>import('./modules/general/new-search/new-search.module').then(m=>m.NewSearchModule)},
  {path: '', component: FirstComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
