import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TermoRoutingModule } from './termo-routing.module';
import { TermoFormularioComponent } from './termo-formulario/termo-formulario.component';
import { TermoComponent } from './termo.component';


@NgModule({
  declarations: [TermoFormularioComponent, TermoComponent],
  imports: [
    CommonModule,
    TermoRoutingModule
  ]
})
export class TermoModule { }
