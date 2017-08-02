import { Component, OnInit } from '@angular/core';
import {Diacaixa} from '../models/diacaixa';
import {CaixaService} from './caixa.service';

@Component({
  selector: 'kr-caixa',
  templateUrl: './caixa.component.html',
  styleUrls: ['./caixa.component.css']
})
export class CaixaComponent implements OnInit {
  data: Date;
  caixas: Diacaixa[];

  constructor(private caixaService: CaixaService) {
    this.data = new Date();
  }

  ngOnInit() {
    this.caixas = this.caixaService.retornaCaixas()
  }

}
