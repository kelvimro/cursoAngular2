import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {ModuleWithProviders, NgModule} from '@angular/core';
import {InicialComponent} from './inicial/inicial.component';
import {AppComponent} from './app.component';
/**
 * Created by kelvimro on 18/07/17.
 */

const appRotas: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'inicial', component: InicialComponent }//,
  //{ path: '', component: AppComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRotas) ],
  exports: [ RouterModule ]
})

export class AppRoutinModule {}
