import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlitzPage } from './blitz.page';

const routes: Routes = [
  {
    path: '',
    component: BlitzPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlitzPageRoutingModule {}
