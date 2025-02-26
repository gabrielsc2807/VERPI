import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AluCursinhoPage } from './alu-cursinho.page';

const routes: Routes = [
  {
    path: '',
    component: AluCursinhoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AluCursinhoPageRoutingModule {}
