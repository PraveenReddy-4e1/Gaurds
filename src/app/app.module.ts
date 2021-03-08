import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './components/home/home.component';

import {FormsModule} from '@angular/forms';
import { AuthGuard } from './auth.guard';
import { ListComponent } from './components/list/list.component';
import { DetailsComponent } from './components/details/details.component';
import { DeActiveGuard } from './de-active.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ListComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [AuthGuard,DeActiveGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
