import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChallengeinfoPage } from './challengeinfo.page';

const routes: Routes = [
  {
    path: '',
    component: ChallengeinfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChallengeinfoPageRoutingModule {}
