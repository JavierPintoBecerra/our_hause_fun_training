import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChallengesService } from '../challenges.service';
import { Challenge } from '../challenges.model';
import { Location } from '@angular/common';
import { AlertController } from '@ionic/angular';
//import * as moment from 'moment';
import { variable } from '@angular/compiler/src/output/output_ast';
import { Storage } from '@capacitor/storage';

@Component({
  selector: 'app-challengeinfo',
  templateUrl: './challengeinfo.page.html',
  styleUrls: ['./challengeinfo.page.scss'],
})
export class ChallengeinfoPage implements OnInit {

  public challenge: Challenge;
  public location: Location;
  public idChallenge: string;

  
  
     //////++++++ Reading information from storage ++++++/////
    /*  public  checkChallenge=async()=>{
      let {value}=await Storage.get({key:`Challenge2`})
  
      return value;
      
    }*/
    //////------ Reading information from storage -----/////
 



  constructor(
    private activatedRoute: ActivatedRoute,
    public challengesService: ChallengesService,
    public router: Router, private alertctrl:AlertController,  
    

  ) {

  


    this.idChallenge=this.activatedRoute.snapshot.paramMap.get('challengeId')

    this.challenge = this.challengesService.getChallenge(this.idChallenge); // Autogenerado
    

  
  }

  async ngOnInit() {
     ////**** Using the information in the Storage *********//////
    // const challengeUpdate = await this.checkChallenge()    // This is for showing the valued 

     //console.log('This challenge state is '+challengeUpdate)  

     ////----- Using the information in the Storage -------//////

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
            var  challengeNumber = parseInt(this.challenge.id) // Gets the challenge Id and converts it to an integer
            console.log(challengeNumber)        
            console.log('Challenges Updated!!'); 

            ////+++++++++ Verify challenge updated ++++++++////
              let checkChallenge=async()=>{
              let {value}=await Storage.get({key:`Challenge${challengeNumber}`})
          
              return value;
              }

            //// ------ Verify challenge updated ----- ////
            
            ////*******  Challenge updated *********/////

            Storage.set({
              key: `Challenge${challengeNumber}`,
              value: ' Still Worked!!!!!'
            });

            /// ---- challenge updated ------/////
            
            
          }
        }

      ]
    });
    await alertElement.present(); 
  }
  
}


