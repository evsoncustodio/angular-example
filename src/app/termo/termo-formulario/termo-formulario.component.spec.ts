import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermoFormularioComponent } from './termo-formulario.component';

describe('TermoFormularioComponent', () => {
  let component: TermoFormularioComponent;
  let fixture: ComponentFixture<TermoFormularioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermoFormularioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermoFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
