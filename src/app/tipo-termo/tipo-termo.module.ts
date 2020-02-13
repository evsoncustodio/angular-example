import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TipoTermoRoutingModule } from './tipo-termo-routing.module';
import { TipoTermoComponent } from './tipo-termo.component';
import { TipoTermoListagemComponent } from './tipo-termo-listagem/tipo-termo-listagem.component';
import { TipoTermoDetalheComponent } from './tipo-termo-detalhe/tipo-termo-detalhe.component';


@NgModule({
  declarations: [TipoTermoComponent, TipoTermoListagemComponent, TipoTermoDetalheComponent],
  imports: [
    CommonModule,
    TipoTermoRoutingModule
  ]
})
export class TipoTermoModule { }
