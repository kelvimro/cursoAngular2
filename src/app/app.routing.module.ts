import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { InicialComponent } from './inicial/inicial.component';
/**
 * Created by kelvimro on 18/07/17.
 */

const appRotas: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component:  InicialComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRotas) ],
  exports: [ RouterModule ]
})

export class AppRoutinModule {}
