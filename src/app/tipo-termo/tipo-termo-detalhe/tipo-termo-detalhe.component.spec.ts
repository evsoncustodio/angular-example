import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoTermoDetalheComponent } from './tipo-termo-detalhe.component';

describe('TipoTermoDetalheComponent', () => {
  let component: TipoTermoDetalheComponent;
  let fixture: ComponentFixture<TipoTermoDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoTermoDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoTermoDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
