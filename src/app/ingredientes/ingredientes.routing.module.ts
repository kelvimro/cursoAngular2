/**
 * Created by kelvimro on 20/07/17.
 */
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {IngredientesComponent} from './ingredientes.component';
import {IngredientesListaComponent} from './ingredientes-lista/ingredientes-lista.component';
/**
 * Created by kelvimro on 18/07/17.
 */

const ingredientesRotas: Routes = [
  { path: 'ingredientes', component: IngredientesComponent, children: [
    {path: ':id', component: IngredientesListaComponent }
  ]}
];

@NgModule({
  imports: [ RouterModule.forChild(ingredientesRotas) ],
  exports: [ RouterModule ]
})

export class IngredientesRoutingModule {}
