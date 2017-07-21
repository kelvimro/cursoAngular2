import { Component, OnInit } from '@angular/core';
import {Ingrediente} from '../../models/ingrediente';
import {IngredientesService} from '../ingredientes.service';

@Component({
  selector: 'kr-ingredientes-lista',
  templateUrl: './ingredientes-lista.component.html',
  styleUrls: ['./ingredientes-lista.component.css']
})
export class IngredientesListaComponent implements OnInit {
  public ingredientes: Ingrediente[] = [];

  constructor(private ingredientesService: IngredientesService) { }

  ngOnInit() {
    this.ingredientes = this.ingredientesService.getIngredientes;
  }

}
