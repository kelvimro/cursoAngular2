/**
 * Created by kelvimro on 15/07/17.
 */
import { Sexo } from './sexo.enum';
export class Usuario {
  public id: number;
  public nome: string;
  public senha: string;
  public nascimento?: any;
  public casado?: boolean;
  public sexo: Sexo = Sexo.Masculino;

  constructor(
     id: number,
     nome: string,
     senha: string,
     nascimento?: any,
     casado?: boolean,
     sexo: Sexo = Sexo.Masculino
  ) {  }

}
