import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BarragePage } from './barrage.page';

const routes: Routes = [
  {
    path: '',
    component: BarragePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BarragePageRoutingModule {}
