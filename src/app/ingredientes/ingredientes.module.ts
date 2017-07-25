import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IngredientesComponent} from './ingredientes.component';
import {IngredientesRoutingModule} from './ingredientes.routing.module';
import {IngredientesService} from './ingredientes.service';
import {IngredientesListaComponent} from './ingredientes-lista/ingredientes-lista.component';
import {RouterModule} from '@angular/router';
import {IngredientesDetalhesComponent} from './ingredientes-detalhes/ingredientes-detalhes.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    IngredientesRoutingModule
  ],
  providers: [IngredientesService],
  declarations: [IngredientesComponent,
    IngredientesListaComponent,
    IngredientesDetalhesComponent]
})
export class IngredientesModule {
}
