import {Component, OnDestroy, OnInit} from '@angular/core';
import {Ingrediente} from '../../models/ingrediente';
import {NgForm} from '@angular/forms';
import {IngredientesService} from '../ingredientes.service';
import {Subscription} from 'rxjs/Subscription';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-ingredientes-detalhes',
  templateUrl: './ingredientes-detalhes.component.html',
  styleUrls: ['./ingredientes-detalhes.component.css']
})
export class IngredientesDetalhesComponent implements OnInit, OnDestroy {
  public ingrediente: Ingrediente;
  incricao: Subscription;


  constructor(private ingredientesService: IngredientesService,
              private rota: ActivatedRoute) {
  }

  ngOnInit() {
    this.incricao = this.rota.params.subscribe(
      (parametros: any) => {
        let id = parametros['id'];
        this.ingrediente = this.ingredientesService.getIngrediente(id);
      }
    );
  }

  ngOnDestroy() {
    this.incricao.unsubscribe();
  }

  onSubmit(_form: NgForm) {
    console.log(_form);
    this.ingrediente = _form.form.value;
    this.ingredientesService.addIngredientes(this.ingrediente);
  }

}
