import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CurGerenciarPageRoutingModule } from './cur-gerenciar-routing.module';

import { CurGerenciarPage } from './cur-gerenciar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CurGerenciarPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CurGerenciarPage]
})
export class CurGerenciarPageModule {}
