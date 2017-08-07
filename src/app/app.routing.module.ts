import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { MakeupComponent } from './components/makeup/makeup.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home' , pathMatch:'full'},
  { path: 'home', component:HomeComponent},
  { path: 'makeup', component:MakeupComponent}  
];
 
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes , {useHash:true})  
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}