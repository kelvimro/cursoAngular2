import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientesDetalhesComponent } from './ingredientes-detalhes.component';

describe('IngredientesDetalhesComponent', () => {
  let component: IngredientesDetalhesComponent;
  let fixture: ComponentFixture<IngredientesDetalhesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngredientesDetalhesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientesDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
