import {Component, OnDestroy, OnInit} from '@angular/core';
import {Ingrediente} from '../../models/ingrediente';
import {NgForm} from '@angular/forms';
import {IngredientesService} from '../ingredientes.service';
import {Subscription} from 'rxjs/Subscription';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-ingredientes-detalhes',
  templateUrl: './ingredientes-detalhes.component.html',
  styleUrls: ['./ingredientes-detalhes.component.css']
})
export class IngredientesDetalhesComponent implements OnInit, OnDestroy {
  ingrediente: Ingrediente;
  incricao: Subscription;


  constructor(private ingredientesService: IngredientesService,
              private rota: ActivatedRoute,
              private roteador: Router) {
  }

  ngOnInit() {
    this.incricao = this.rota.params.subscribe(
      (params: any) => {
        let id = params['id'];
        console.log(id);
        this.ingrediente = this.ingredientesService.getIngrediente(id);
        console.log(this.ingrediente);
      }
    );

  }

  ngOnDestroy() {
    this.incricao.unsubscribe();
  }

  onSubmit(_form: NgForm) {
    this.ingrediente = _form.form.value;
    this.ingredientesService.addIngredientes(this.ingrediente);
    console.log(this.ingrediente);
    this.roteador.navigate(['/ingredientes']);
  }

}
