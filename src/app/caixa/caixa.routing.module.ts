import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CaixaComponent} from './caixa.component';

const caixaRotas: Routes = [
  {path: '', component: CaixaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(caixaRotas)],
  exports: [RouterModule]
})
export class CaixaRoutingModule {
}
