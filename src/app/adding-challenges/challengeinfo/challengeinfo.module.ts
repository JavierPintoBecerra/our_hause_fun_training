import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChallengeinfoPageRoutingModule } from './challengeinfo-routing.module';

import { ChallengeinfoPage } from './challengeinfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChallengeinfoPageRoutingModule
  ],
  declarations: [ChallengeinfoPage]
})
export class ChallengeinfoPageModule {}
