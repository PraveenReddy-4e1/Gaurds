import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { DetailsComponent } from './components/details/details.component';
import { HomeComponent } from './components/home/home.component';
import { ListComponent } from './components/list/list.component';
import { DeActiveGuard } from './de-active.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component:  LoginComponent},
  {path: 'home', component: HomeComponent, canActivate:[AuthGuard]},
  { path: 'list', component:  ListComponent, canActivateChild:[AuthGuard],
   children:[
      { path: 'details', component:  DetailsComponent,canDeactivate:[DeActiveGuard]},
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
