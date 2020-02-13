import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoTermoComponent } from './tipo-termo.component';

describe('TipoTermoComponent', () => {
  let component: TipoTermoComponent;
  let fixture: ComponentFixture<TipoTermoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoTermoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoTermoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
