import { Component, OnInit } from '@angular/core';
import {Diacaixa} from "../models/diacaixa";

@Component({
  selector: 'kr-caixa',
  templateUrl: './caixa.component.html',
  styleUrls: ['./caixa.component.css']
})
export class CaixaComponent implements OnInit {
  data: Date;
  caixa: Diacaixa;

  constructor() {
    this.data = new Date();
  }

  ngOnInit() {
  }

}
