import {Saidacaixa} from './saidacaixa';
/**
 * Created by kelvimro on 27/07/17.
 */
export class Diacaixa {
  data: Date
  fichainicial: number
  fichafinal: number
  trocoabertura: number
  trocodeixado: number
  retirada: number
  cartaodebito?: number
  cartaocredito?: number
  saida?: Saidacaixa[] = []

  teste: any;

  constructor() {
    this.teste = 'error';
  }
}

