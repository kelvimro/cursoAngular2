import {Injectable} from '@angular/core';
import {Ingrediente} from '../models/ingrediente';

@Injectable()
export class IngredientesService {
  private ingredientes: Ingrediente[] = [];

  constructor() {
    this.ingredientes = [
      {
        id: 1,
        nome: 'Leite',
        codigoBarras: 7899879871234,
        preco: 2.88,
        volume: 1000,
        descricao: 'Leite saquinho tipo "C"',
        quantidade: 1
      },
      {
        id: 2,
        nome: 'Sabão em Pó Yp 2Kg',
        codigoBarras: 7899870000234,
        preco: 10.88,
        volume: 2000,
        descricao: 'O melhor sabão do munto pai',
        quantidade: 11
      },
      {
        id: 3,
        nome: 'Farinha de Aveia',
        codigoBarras: 7899823331234,
        preco: 1.78,
        // volume: 300,
        descricao: 'Ah melhor farinha de todas',
        // quantidade: 3
      }, {
        id: 4,
        nome: 'Completão Do tio JAOAO',
        codigoBarras: 7899821110000,
        preco: 41.5671,
        volume: 41.5,
        descricao: 'O melhor produto do munto pai',
        quantidade: 5
      }
    ]
  }

  get getIngredientes(): Ingrediente[] {
    return this.ingredientes;
  }

  getIngrediente(id: number): Ingrediente {
    for (let i of this.ingredientes) {
      if (i.id === id) {
        return i;
      }
    }
    return null;
  }

  public addIngredientes(i: Ingrediente): boolean {
    this.ingredientes.push(i);
    return true;
  };

  public remove(_id: number): boolean {
    for (let i of this.ingredientes) {
      if (i.id === _id) {
        console.log(this.ingredientes.indexOf(i));
        this.ingredientes.splice(this.ingredientes.indexOf(i), 1);
        return true;
      }
    }
    return false;
  }

}
