import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChallengesService } from '../challenges.service';
import { Challenge } from '../challenges.model';
import { Location } from '@angular/common';
import { AlertController } from '@ionic/angular';
//import * as moment from 'moment';
import { variable } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-challengeinfo',
  templateUrl: './challengeinfo.page.html',
  styleUrls: ['./challengeinfo.page.scss'],
})
export class ChallengeinfoPage implements OnInit {

  public challenge: Challenge;
  public location: Location;
  public idChallenge: string;
  //public myDate: Date = new Date("Sun Aug 15 2021 17:58:19 GMT-0500"); // Date  for restricting acces acordin to date
  public challengeNumber:number = 0
  constructor(
    private activatedRoute: ActivatedRoute,
    public challengesService: ChallengesService,
    public router: Router, private alertctrl:AlertController,  
    

  ) {

    //console.log(this.location.path());

    this.idChallenge=this.activatedRoute.snapshot.paramMap.get('challengeId')

    this.challenge = this.challengesService.getChallenge(this.idChallenge); // Autogenerado
    
    //const formattedDate = moment(this.myDate).format('DD-MM-YYYY');
    //console.log(formattedDate);
    //console.log(this.challenge);
    //console.log(this.myDate)
  }

  ngOnInit() {
    //There are some differences between this and Fazt's program 
  };
  disableButton; 
 

  async updateChallenge(){
    
    const alertElement=await this.alertctrl.create({
      header: 'did you complete the challenge?',
      message: 'Click ok if you already completed the challenge',
      buttons: [
        {
          text: 'Cancel', 
          role: 'cancel'
        },
        {
          text: 'OK', 
          handler: ()=>{
            this.challengeNumber= this.challengeNumber+1; 
            this.disableButton = true;
            console.log('Challenges Updated!!'); 
            console.log(this.challengeNumber)
          }
        }

      ]
    });
    await alertElement.present(); 
  }
  
}


