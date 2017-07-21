import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IngredientesComponent} from './ingredientes.component';
import {IngredientesRoutingModule} from './ingredientes.routing.module';
import {IngredientesService} from './ingredientes.service';
import {IngredientesListaComponent} from './ingredientes-lista/ingredientes-lista.component';

@NgModule({
  imports: [
    CommonModule,
    IngredientesRoutingModule
  ],
  providers: [IngredientesService],
  declarations: [IngredientesComponent,
    IngredientesListaComponent]
})
export class IngredientesModule {
}
