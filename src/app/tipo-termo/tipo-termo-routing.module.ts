import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TipoTermoListagemComponent } from './tipo-termo-listagem/tipo-termo-listagem.component';
import { TipoTermoDetalheComponent } from './tipo-termo-detalhe/tipo-termo-detalhe.component';
import { TipoTermoComponent } from './tipo-termo.component';


const routes: Routes = [
  {
    path: '',
    component: TipoTermoComponent,
    children: [
      { path: '', component: TipoTermoListagemComponent },
      { path: ':id', component: TipoTermoDetalheComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TipoTermoRoutingModule { }
