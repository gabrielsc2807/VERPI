import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerAluPageRoutingModule } from './ver-alu-routing.module';

import { VerAluPage } from './ver-alu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerAluPageRoutingModule
  ],
  declarations: [VerAluPage]
})
export class VerAluPageModule {}
