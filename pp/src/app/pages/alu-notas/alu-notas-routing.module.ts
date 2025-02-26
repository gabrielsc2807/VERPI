import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AluNotasPage } from './alu-notas.page';

const routes: Routes = [
  {
    path: '',
    component: AluNotasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AluNotasPageRoutingModule {}
