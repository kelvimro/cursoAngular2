import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {CaixaComponent} from './caixa.component';
import {CaixaRoutingModule} from './caixa.routing.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    CaixaRoutingModule
  ],
  declarations: [
    CaixaComponent
  ]
})
export class CaixaModule { }
