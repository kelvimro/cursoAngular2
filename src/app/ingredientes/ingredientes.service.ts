import {Injectable} from '@angular/core';
import {Ingrediente} from '../models/ingrediente';

@Injectable()
export class IngredientesService {
  private ingredientes: Ingrediente[] = [];

  constructor() {
    this.ingredientes = [
      {
        id: 1,
        nome: 'Barra Cereal',
        codigoBarras: 7899879871234
      },
      {
        id: 2,
        nome: 'Sabão em Pó',
        codigoBarras: 7899870000234
      },
      {
        id: 3,
        nome: 'Camisinha',
        codigoBarras: 7899823331234
      }
    ]
  }

  get getIngredientes(): Ingrediente[] {
    return this.ingredientes;
  }

  public addIngredientes(i: Ingrediente): boolean {
    this.ingredientes.push(i);
    return true;
  };

  public remove(): Ingrediente {
    return this.ingredientes.pop();
  }

}
