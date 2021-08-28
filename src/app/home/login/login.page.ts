import { Component, OnInit } from '@angular/core';
import { ChallengesService } from '../../shared/services/challenges/challenges.service';
import { Storage } from '@capacitor/storage';  //Capacitor;




@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
/*

@Component({
  selector: 'app-adding-challenges',
  templateUrl: './adding-challenges.page.html',
  styleUrls: ['./adding-challenges.page.scss'],
})

*/
export class LoginPage implements OnInit {

  public studentName: string;
  public studentCode: string;
  public studentGrade: string;
  public studentHouse: string;
  public studentPassword: string;

  public view;  // Variable to change from login to sign up

  key: string = "" // Key for storage 
  value: string = "" // valuye for storage


  public  checkId=async()=>{                               //Verifies if the information is in the storage
    let {value}=await Storage.get({key:'ty'})

    return value;
    
  }





  constructor(private challengeService: ChallengesService,
    ) {

 


  }

  //////****Consume services/ Sending information to the server *********////////
  public createChallenge() {

    this.challengeService.create({
      name: this.studentName,
      code: this.studentCode,
      house: this.studentHouse,
      grade: this.studentGrade,
      password: this.studentPassword,
      completed: 0

    }).subscribe(result => {
      console.log(result)

      
    Storage.set({
      key: 'id',
      value: result['data']['id'],
    });
    
    //////********* Setting up the inicial condition of the challenges*******/////
    Storage.set({
      key: 'Challenge1',
      value: 'false'
    });
    Storage.set({
      key: 'Challenge2',
      value: 'false'
    });
    //////xxxxxxxxxxxxxxxx Setting up the inicial condition of the challenges xxxxxxxxxxxxxx/////

    }, err => {
      console.log(err)
    })

    
  
  }

  ////*********Changing the loging / sign up information////////////

  public changeView() {
    this.view = false;
    console.log(this.view)
  }
  public changeView2() {
    this.view = true;
    console.log(this.view)
  }
  //////****xxxxxxxxx *********////////


  async ngOnInit() {

    this.view = true;

  }


}
