import { Component, OnInit } from '@angular/core';
import {IngredientesService} from './ingredientes.service';
import {Ingrediente} from '../models/ingrediente';

@Component({
  selector: 'kr-ingredientes',
  templateUrl: './ingredientes.component.html',
  styleUrls: ['./ingredientes.component.css']
})
export class IngredientesComponent implements OnInit {
  ingredientes: Ingrediente[] = [];

  constructor(private ingredientesService: IngredientesService) {
  }

  ngOnInit() {
    this.ingredientes = this.ingredientesService.getIngredientes;
  }

  addTeste() {
    this.ingredientesService.addIngredientes(
      {
        id: 4,
        nome: 'Coca-Cola',
        codigoBarras: 7898888899999
      }
    );
  }

  remove() {
    console.log(this.ingredientesService.remove());
  }

}
