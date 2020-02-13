import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TermoFormularioComponent } from './termo-formulario/termo-formulario.component';
import { TermoComponent } from './termo.component';


const routes: Routes = [
  {
    path: '',
    component: TermoComponent,
    children: [
      { path: 'incluir', component: TermoFormularioComponent },
      { path: 'editar/:id', component: TermoFormularioComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TermoRoutingModule { }
