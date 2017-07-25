import {Component, OnInit} from '@angular/core';
import {Ingrediente} from '../../models/ingrediente';
import {IngredientesService} from '../ingredientes.service';

@Component({
  selector: 'kr-ingredientes-lista',
  templateUrl: './ingredientes-lista.component.html',
  styleUrls: ['./ingredientes-lista.component.css']
})
export class IngredientesListaComponent implements OnInit {
  public ingredientes: Ingrediente[] = [];
  podeeditar: boolean;

  constructor(private ingredientesService: IngredientesService) {
    this.podeeditar = false;
  }

  ngOnInit() {
    this.ingredientes = this.ingredientesService.getIngredientes;
  }

  deletarIngrediente(_id: number) {
    this.ingredientesService.remove(_id);
  }

  editar() {
    this.podeeditar = !this.podeeditar;
    console.log(this.podeeditar);
  }

}
