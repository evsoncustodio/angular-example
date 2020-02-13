import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'tipo-termo', loadChildren: () => import('./tipo-termo/tipo-termo.module').then(m => m.TipoTermoModule) },
  { path: 'termo', loadChildren: () => import('./termo/termo.module').then(m => m.TermoModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true, useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
