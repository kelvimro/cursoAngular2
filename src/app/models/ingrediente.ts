/**
 * Created by kelvimro on 21/07/17.
 */
export class Ingrediente {
  public id: number;
  public nome: string;
  public codigoBarras: number;
  public preco?: number;
  public volume?: number;
  public descricao?: string;
  public quantidade?: number;

  constructor(id: number,
              nome: string,
              codigoBarras: number) {
  }

}
