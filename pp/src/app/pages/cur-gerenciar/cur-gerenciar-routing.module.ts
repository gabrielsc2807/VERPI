import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CurGerenciarPage } from './cur-gerenciar.page';

const routes: Routes = [
  {
    path: '',
    component: CurGerenciarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CurGerenciarPageRoutingModule {}
