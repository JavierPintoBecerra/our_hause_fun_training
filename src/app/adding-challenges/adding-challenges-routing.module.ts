import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddingChallengesPage } from './adding-challenges.page';

const routes: Routes = [
  {
    path: '',
    component: AddingChallengesPage
  },
  {
    path: 'challengeinfo',
    loadChildren: () => import('./challengeinfo/challengeinfo.module').then( m => m.ChallengeinfoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddingChallengesPageRoutingModule {}
