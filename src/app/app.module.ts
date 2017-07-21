import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InicialComponent } from './inicial/inicial.component';
import { AppRoutinModule } from './app.routing.module';
import {LoginModule} from './login/login.module';
import {IngredientesModule} from './ingredientes/ingredientes.module';

@NgModule({
  declarations: [
    AppComponent,
    InicialComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    LoginModule,
    IngredientesModule,
    AppRoutinModule
  ],
  exports: [ ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
