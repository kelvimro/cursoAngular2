/**
 * Created by kelvimro on 21/07/17.
 *//**
 * Created by kelvimro on 20/07/17.
 */
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {LoginComponent} from './login.component';
const loginRotas: Routes = [
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(loginRotas) ],
  exports: [ RouterModule ]
})

export class LoginRoutingModule {}
