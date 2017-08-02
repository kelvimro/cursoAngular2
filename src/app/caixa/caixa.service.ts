import {Injectable} from '@angular/core';
import {Diacaixa} from '../models/diacaixa';
import {Saidacaixa} from '../models/saidacaixa';

@Injectable()
export class CaixaService {
  private diaraiaCaixa: Diacaixa[] = []

  constructor() {
    this.diaraiaCaixa = [
      {
        // data: Date,
        fichainicial: 3266,
        fichafinal: 3336,
        trocoabertura: 132.75,
        trocodeixado: 73.85,
        retirada: 450,
        cartaodebito: 646.55,
        cartaocredito : 699.33,
        saida: [{
          obs: 'Vale A',
          valor: 300,
        },
          {
            obs: 'Vale B',
            valor: 31
          }]
      },

      {
        // data: Date,
        fichainicial: 3336,
        fichafinal: 3389,
        trocoabertura: 120.75,
        trocodeixado: 55.85,
        retirada: 230,
        cartaodebito: 123.55,
        cartaocredito : 532.33,
        saida: [{
          obs: 'Vale C',
          valor: 233,
        },
          {
            obs: 'Vale D',
            valor: 43
          }]
      }]
  }

  public retornaCaixas(): Diacaixa[] {
    return this.diaraiaCaixa;
  }

}
