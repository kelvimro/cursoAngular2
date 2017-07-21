import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngredientesComponent } from './ingredientes.component';
import {IngredientesRoutingModule} from './ingredientes.routing.module';

@NgModule({
  imports: [
    CommonModule,
    IngredientesRoutingModule
  ],
  declarations: [IngredientesComponent]
})
export class IngredientesModule { }
