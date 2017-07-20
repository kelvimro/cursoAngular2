/**
 * Created by kelvimro on 15/07/17.
 */
import { Sexo } from './sexo.enum';
export class Usuario {

  constructor(
    public id: number,
    public nome: string,
    public senha: string,
    public nascimento?: any,
    public casado?: boolean,
    public sexo: Sexo = Sexo.Masculino
  ) {  }

}
