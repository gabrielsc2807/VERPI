import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AluCursinhoPageRoutingModule } from './alu-cursinho-routing.module';

import { AluCursinhoPage } from './alu-cursinho.page';

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    AluCursinhoPageRoutingModule
  ],
  declarations: [AluCursinhoPage]
})
export class AluCursinhoPageModule {}
