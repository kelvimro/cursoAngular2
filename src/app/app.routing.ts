import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {ModuleWithProviders} from '@angular/core';
import {InicialComponent} from './inicial/inicial.component';
import {AppComponent} from './app.component';
/**
 * Created by kelvimro on 18/07/17.
 */

const APP_ROTAS: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'inicial', component: InicialComponent }//,
  //{ path: '', component: AppComponent }
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(APP_ROTAS);
