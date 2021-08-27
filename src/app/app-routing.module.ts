import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'adding-challenges',
    pathMatch: 'full'
  },
  {
    path: 'adding-challenges',
    children:[
      {
        path:"",
        loadChildren: () => import('./adding-challenges/adding-challenges.module').then( m => m.AddingChallengesPageModule)
      }, 
      {
        path:"challengeId",
        loadChildren: ()=> import('./adding-challenges/challengeinfo/challengeinfo.module').then(m => m.ChallengeinfoPageModule)
      }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
