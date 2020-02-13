import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoTermoListagemComponent } from './tipo-termo-listagem.component';

describe('TipoTermoListagemComponent', () => {
  let component: TipoTermoListagemComponent;
  let fixture: ComponentFixture<TipoTermoListagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoTermoListagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoTermoListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
