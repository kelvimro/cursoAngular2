import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { InicialComponent } from './inicial/inicial.component';
import {ROUTING} from './app.routing';

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
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
