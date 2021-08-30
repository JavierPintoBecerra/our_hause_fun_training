import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChallengesListService } from '../challengesList.service';  // ChallengesService from challenge model stored
import { Challenge } from '../challenges.model';
import { Location } from '@angular/common';
import { AlertController } from '@ionic/angular';
import { variable } from '@angular/compiler/src/output/output_ast';
import { Storage } from '@capacitor/storage';
import { ChallengesService } from '../../shared/services/challenges/challenges.service'; //Challenges service to connect with the Server
import { ThisReceiver } from '@angular/compiler';


@Component({
  selector: 'app-challengeinfo',
  templateUrl: './challengeinfo.page.html',
  styleUrls: ['./challengeinfo.page.scss'],
})
export class ChallengeinfoPage implements OnInit {

  public challenge: Challenge;
  public location: Location;
  public idChallenge: string;


  public challengeUpdate;   // for verifying the state of the challenge when it is loaded. 
  public validation: string ="false"; // variable that allos to enable or desable the challenge  
  public addChallengeCount; //Variable to convert number of challenges completed to and integer 
  public challengeCountString; //Variable to convert number of challenges completed to string
  public userId;              // Get the usr Id
  
  
     //////++++++ Reading information from storage ++++++/////
     /*When the page is load it verifies the state of the challenge */
     public  firstChallenge=async()=>{
      let {value}=await Storage.get({key:`Challenge${this.challenge.id}`})
  
      return value;
      
    }

     /// ******** Check the number of challenges completed ***** ////

     public checkCompleted=async()=>{
      let {value}=await (Storage.get({key:'ChallengeCompleted'}))
      return value;
      }


    /// ----- Check the number of challenges completed ---- ////

    public checkID=async()=>{
      let {value}=await (Storage.get({key:'id'}))
      return value;
      }


    //////------ Reading information from storage -----/////
 



  constructor(
    private activatedRoute: ActivatedRoute,
    public ChallengesListService: ChallengesListService,
    public router: Router, private alertctrl:AlertController,  
    private challengesService: ChallengesService

  ) {

  


    this.idChallenge=this.activatedRoute.snapshot.paramMap.get('challengeId')

    this.challenge = this.ChallengesListService.getChallenge(this.idChallenge); // Autogenerado
    

  
  }

  async ngOnInit() {
     ////**** Using the information in the Storage *********//////
     this.challengeUpdate = await (this.firstChallenge());   // This is for showing the valued 
     this.addChallengeCount = parseInt(await(this.checkCompleted())) +1 ;
     this.userId= await this.checkID();

     console.log(this.addChallengeCount)
    // console.log('This challenge state is '+this.challengeUpdate)  

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
            //console.log(challengeNumber)        
            console.log('Challenges Updated!!'); 

            ////+++++++++ Verify challenge updated ++++++++////
              /*let checkChallenge=async()=>{
              let {value}=await Storage.get({key:`Challenge${challengeNumber}`})
              return value;
              }*/

            //// ------ Verify challenge updated ----- ////
            
            ////*******  Challenge state updated in storage *********/////

            this.challengeCountString=this.addChallengeCount + "" //Converting integer to string to be stored. 
            console.log(this.challengeCountString)
            

            Storage.set({
              key: `Challenge${challengeNumber}`,
              value: 'true'
            });
            Storage.set({
              key: 'ChallengeCompleted',
              value: this.challengeCountString
            });
            

            /// ---- challenge state updated in Storage ------/////

            // +++++++ Challenges updated in the server +++++ ////

            
            console.log('This is the ID' +this.userId)
            console.log('this is the number of challenges' + this.challengeCountString)
            this.challengesService.update(this.userId, {completed:this.addChallengeCount}).subscribe(result=>{console.log(result)}) // Sending the update to the server. 

            //dinosaurios 29/08/21

            this.router.navigate(['/adding-challenges'])

            // ---- Challenges updated in the server ---- ////

            
            
          }
        }

      ]
    });
    await alertElement.present(); 
  }
  
}


