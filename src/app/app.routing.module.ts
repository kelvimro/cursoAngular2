import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { InicialComponent } from './inicial/inicial.component';
/**
 * Created by kelvimro on 18/07/17.
 */

const appRotas: Routes = [
  { path: '', component:  InicialComponent },
  { path: 'ingredientes', loadChildren: 'app/ingredientes/ingredientes.module#IngredientesModule'}
];

@NgModule({
  imports: [ RouterModule.forRoot(appRotas) ],
  exports: [ RouterModule ]
})

export class AppRoutinModule {}
