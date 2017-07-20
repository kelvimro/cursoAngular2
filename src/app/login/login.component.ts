import {Component, OnInit} from '@angular/core';
import {Usuario} from '../models/usuario';
import {Sexo} from '../models/sexo.enum';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'kr-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  enviado: boolean;
  meuUsuario: Usuario[] = [];
  sexo: string[];
  login: FormGroup;
  teste: boolean;

  constructor() {
    // Inicializa o form group
    this.login = new FormGroup({
      nome: new FormControl(),
      senha: new FormControl()
    });
  }

  tteste(t: any) {
    this.enviado = true;
    console.log(t.value);
    for (let u of this.meuUsuario) {
      if (u.nome === t.value.nome) {
        if (u.senha === t.value.senha) {
          this.teste = true;
          alert(`AEEEE`);
        }
      }
    }
    if (!this.teste) {
      alert(`Usuario ou Senha invalido`);
    }
  }

  onSubmit(t: any) {
    this.enviado = true;
    console.log(t);
    for (let u of this.meuUsuario) {
      if (u.nome === t.nome) {
        if (u.senha === t.senha) {
          this.teste = true;
        }
      }
    }
    if (!this.teste) {
      alert(`Usuario ou Senha invalido`);
    }
  }

  get totalUsuarios(): number {
    return this.meuUsuario.length;
  }

  get diagnostic() {
    return JSON.stringify(this.meuUsuario);
  }


  ngOnInit() {
    // .keys() retira apenas as chaves de uma "TUPLA"
    let _sexo = Object.keys(Sexo);
    // .slice(.../2) "fatia" a string[] da metade até o fim
    this.sexo = _sexo.slice(_sexo.length / 2);

    this.teste = this.enviado = false;

    let aux: Usuario;
    aux = new Usuario(1, `Kelvim `, `0000`, this.sexo[0]);
    this.meuUsuario.push(aux);
    console.log(this.diagnostic);
  }
}
