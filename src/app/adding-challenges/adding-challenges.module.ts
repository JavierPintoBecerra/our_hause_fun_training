import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddingChallengesPageRoutingModule } from './adding-challenges-routing.module';

import { AddingChallengesPage } from './adding-challenges.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddingChallengesPageRoutingModule
  ],
  declarations: [AddingChallengesPage]
})
export class AddingChallengesPageModule {}
