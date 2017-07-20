import {Component, OnInit} from '@angular/core';
import {Usuario} from '../models/usuario';
import {Sexo} from '../models/sexo.enum';
import {FormControl, FormGroup} from '@angular/forms';
import {LoginService} from './login.service';

@Component({
  selector: 'kr-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  autenticacao: boolean;
  meuUsuario: Usuario[] = [];
  sexo: string[];
  loginForm: FormGroup;
  loginResult: boolean;

  constructor(private loginService: LoginService) {
    // Inicializa o form group
    this.loginForm = new FormGroup({
      nome: new FormControl(),
      senha: new FormControl()
    });
  }

  onSubmit() {
    if (this.loginResult = this.loginService.getAutenticacao({
      nome: this.loginForm.value.nome,
      senha: this.loginForm.value.senha
      })) {
      console.log(' TRUE ');
    } else {
      console.log(' FALSE ');
    };
  }

  ngOnInit() {
    // .keys() retira apenas as chaves de uma "TUPLA"
    let _sexo = Object.keys(Sexo);
    // .slice(.../2) "fatia" a string[] da metade até o fim
    this.sexo = _sexo.slice(_sexo.length / 2);
  }
}
