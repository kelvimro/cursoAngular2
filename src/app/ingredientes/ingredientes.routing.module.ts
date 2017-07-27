/**
 * Created by kelvimro on 20/07/17.
 */
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {IngredientesComponent} from './ingredientes.component';
import {IngredientesListaComponent} from './ingredientes-lista/ingredientes-lista.component';
import {IngredientesDetalhesComponent} from './ingredientes-detalhes/ingredientes-detalhes.component';
/**
 * Created by kelvimro on 18/07/17.
 */

const ingredientesRotas: Routes = [
    {
      path: '', component: IngredientesComponent, children: [
      {
        path: '', component: IngredientesListaComponent, children: [
        {
          path: 'adicionar', component: IngredientesDetalhesComponent
        },
        {
          path: ':id', component: IngredientesDetalhesComponent
        }]
      }]
    }
  ]
;

@NgModule({
  imports: [RouterModule.forChild(ingredientesRotas)],
  exports: [RouterModule]
})

export class IngredientesRoutingModule {
}
