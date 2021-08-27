import { Component, OnInit } from '@angular/core';
import{ChallengesService} from '../../shared/services/challenges/challenges.service'
//import { Storage } from '@capacitor/storage';  //Capacitor



@Component(
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public studentName: string;
  public studentCode: string;
  public studentGrade: string;
  public studentHouse: string;
  public studentPassword: string;

  public view; 

  key:string="" // Key for storage 
  value: string="" // valuye for storage

  constructor(private challengeService: ChallengesService) { }

   //////****Consume services *********////////
   public createChallenge(){

    this.challengeService.create({
      name: this.studentName,
      code: this.studentCode,
      house: this.studentHouse,
      grade: this.studentGrade,
      password: this.studentPassword,
      completed: 0
      
    }).subscribe(result=>{
      console.log(result)
    },err=>{
      console.log(err)
    })
  
  
   }

   public changeView(){
     this.view=false;
     console.log(this.view)
   }
   public changeView2(){
    this.view=true;
    console.log(this.view)
  }
  //////****xxxxxxxxx *********////////


  ngOnInit() {
    this.view=true;
  }

  /*save(){
    Storage.set({
      key:this.key,

    })
  }

  get(){


  }*/

  

}
