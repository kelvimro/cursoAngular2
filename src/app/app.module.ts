import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { InicialComponent } from './inicial/inicial.component';
import {ROUTING} from './app.routing';
import {LoginService} from './servicos/login.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InicialComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    ROUTING
  ],
  exports: [  ],
  providers: [ LoginService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
