import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroRecomendacaoComponent } from './cadastro-recomendacao.component';

describe('CadastroRecomendacaoComponent', () => {
  let component: CadastroRecomendacaoComponent;
  let fixture: ComponentFixture<CadastroRecomendacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroRecomendacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroRecomendacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
