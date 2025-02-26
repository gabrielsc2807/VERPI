import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AluNotasPageRoutingModule } from './alu-notas-routing.module';

import { AluNotasPage } from './alu-notas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AluNotasPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AluNotasPage]
})
export class AluNotasPageModule {}
