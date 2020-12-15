import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BarragePageRoutingModule } from './barrage-routing.module';

import { BarragePage } from './barrage.page';

import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';

import {sharedModule} from '../../shared/sharedModule'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BarragePageRoutingModule,
    MatCheckboxModule,
    MatCardModule,
    MatRadioModule,
    sharedModule,
  ],
  declarations: [BarragePage]
})
export class BarragePageModule {}
