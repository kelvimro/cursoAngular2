import {Injectable} from '@angular/core';
import {Usuario} from '../models/usuario';
import {Sexo} from '../models/sexo.enum';

@Injectable()
export class LoginService {
  usuarios: Usuario[] = [];

  constructor() {
    this.usuarios = [{
      id: 1,
      nome: 'Kelvim',
      senha: '0000',
      sexo: Sexo.Masculino
    },
      {
        id: 2,
        nome: 'João',
        senha: '1111',
        sexo: Sexo.Masculino
      },
      {
        id: 3,
        nome: 'Maria',
        senha: '2222',
        sexo: Sexo.Masculino
      }]
  }

  public getAutenticacao(_usuario: any): boolean {
    for (let u of this.usuarios) {
      if (u.nome === _usuario['nome']) {
        if (u.senha === _usuario['senha']) {
          return true;
        }
      }
    } return false;
  }

  get totalUsuarios(): number {
    return this.usuarios.length;
  }

}
