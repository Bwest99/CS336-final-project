import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BlitzPageRoutingModule } from './blitz-routing.module';

import { BlitzPage } from './blitz.page';

import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';

import {sharedModule} from '../../shared/sharedModule'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BlitzPageRoutingModule,
    MatCheckboxModule,
    MatCardModule,
    MatRadioModule,
    sharedModule,
  ],
  declarations: [BlitzPage]
})
export class BlitzPageModule {}
