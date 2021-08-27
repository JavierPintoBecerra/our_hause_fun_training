import { Component, OnInit } from '@angular/core';
import { RankingService } from './ranking.service';

import { generalFilter } from './../shared/utils/utils'
import { ActionSheetController } from '@ionic/angular'; // Action Sheet 

import {ChallengesService} from './../shared/services/challenges/challenges.service'


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public positions = []
  public mascotSelection
  public sum
  
  public studentName: string;
  public studentCode: string;
  public studentGrade: string;
  public studentHouse: string;
  public studentPassword: string;





  constructor(private rankingService: RankingService, public actionSheetController: ActionSheetController,private challengeService: ChallengesService,) {

   


  this.rankingService.getRanking()
      .subscribe(async resp => {


        let res_: [] = await resp;

        console.log(res_);

        let data_obj = []


        res_['resp'].forEach(obj => {
          data_obj.push(JSON.parse(JSON.stringify(obj)))
        })

        console.log(data_obj);



        this.positions = generalFilter(data_obj, this.mascotSelection)  // this.positions=generalFilter(data_obj,'Jaguars')


        this.sum = 0


        this.positions.forEach(estu => {
          this.sum = this.sum + estu.completed;
        })

        console.log('Total:', this.sum);
      })


  };

  ////******************* Captrue information from form *************************////
  sendStudentData(){
    console.log(this.studentName)
  }

  ////******************* Captrue information from form *************************////

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
  



  //////****xxxxxxxxx *********////////
  /////////***************************** Action Sheet*****************************************////
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Choose your mascot',
      cssClass: 'my-custom-class',
      buttons: [
        {
          text: 'Sparrow (friendship)',
          icon: 'chatbubbles-outline',
          handler: () => {
            this.mascotSelection = "Sparrow",
              ////******* Activating filter *******//////

              this.rankingService.getRanking()
                .subscribe(async resp => {


                  let res_: [] = await resp;

                  console.log(res_);

                  let data_obj = []


                  res_['resp'].forEach(obj => {
                    data_obj.push(JSON.parse(JSON.stringify(obj)))
                  })

                  console.log(data_obj);



                  this.positions = generalFilter(data_obj, this.mascotSelection)  // this.positions=generalFilter(data_obj,'Jaguars')


                  this.sum = 0


                  this.positions.forEach(estu => {
                    this.sum = this.sum + estu.completed;
                  })

                  console.log('Total:', this.sum);
                })



            ////xxxxxxxxxxxxxxxxxxxxxxxx******* Activating filter *******xxxxxxxxxxxx//////
            console.log(this.mascotSelection);
          }
        }, {
          text: 'Hummingbird (honesty)',
          icon: 'heart-outline',
          handler: () => {
            this.mascotSelection = "Humingbird", 
                          ////******* Activating filter *******//////

                          this.rankingService.getRanking()
                          .subscribe(async resp => {
          
          
                            let res_: [] = await resp;
          
                            console.log(res_);
          
                            let data_obj = []
          
          
                            res_['resp'].forEach(obj => {
                              data_obj.push(JSON.parse(JSON.stringify(obj)))
                            })
          
                            console.log(data_obj);
          
          
          
                            this.positions = generalFilter(data_obj, this.mascotSelection)  // this.positions=generalFilter(data_obj,'Jaguars')
          
          
                            this.sum = 0
          
          
                            this.positions.forEach(estu => {
                              this.sum = this.sum + estu.completed;
                            })
          
                            console.log('Total:', this.sum);
                          })
          
          
          
                      ////xxxxxxxxxxxxxxxxxxxxxxxx******* Activating filter *******xxxxxxxxxxxx//////
            console.log(this.mascotSelection);
          }
        }, {
          text: 'Condor (solidarity)',
          icon: 'medkit-outline',
          handler: () => {
            this.mascotSelection = "Condor",
                                      ////******* Activating filter *******//////

                                      this.rankingService.getRanking()
                                      .subscribe(async resp => {
                      
                      
                                        let res_: [] = await resp;
                      
                                        console.log(res_);
                      
                                        let data_obj = []
                      
                      
                                        res_['resp'].forEach(obj => {
                                          data_obj.push(JSON.parse(JSON.stringify(obj)))
                                        })
                      
                                        console.log(data_obj);
                      
                      
                      
                                        this.positions = generalFilter(data_obj, this.mascotSelection)  // this.positions=generalFilter(data_obj,'Jaguars')
                      
                      
                                        this.sum = 0
                      
                      
                                        this.positions.forEach(estu => {
                                          this.sum = this.sum + estu.completed;
                                        })
                      
                                        console.log('Total:', this.sum);
                                      })
                      
                      
                      
                                  ////xxxxxxxxxxxxxxxxxxxxxxxx******* Activating filter *******xxxxxxxxxxxx//////
            console.log(this.mascotSelection);
            
          }
        },
        {
          text: 'Owl (quality)',
          icon: 'shield-checkmark-outline',
          handler: () => {
            this.mascotSelection = "Owl",
                                      ////******* Activating filter *******//////

                                      this.rankingService.getRanking()
                                      .subscribe(async resp => {
                      
                      
                                        let res_: [] = await resp;
                      
                                        console.log(res_);
                      
                                        let data_obj = []
                      
                      
                                        res_['resp'].forEach(obj => {
                                          data_obj.push(JSON.parse(JSON.stringify(obj)))
                                        })
                      
                                        console.log(data_obj);
                      
                      
                      
                                        this.positions = generalFilter(data_obj, this.mascotSelection)  // this.positions=generalFilter(data_obj,'Jaguars')
                      
                      
                                        this.sum = 0
                      
                      
                                        this.positions.forEach(estu => {
                                          this.sum = this.sum + estu.completed;
                                        })
                      
                                        console.log('Total:', this.sum);
                                      })
                      
                      
                      
                                  ////xxxxxxxxxxxxxxxxxxxxxxxx******* Activating filter *******xxxxxxxxxxxx//////
            console.log(this.mascotSelection);
          }
        },
        {
          text: 'Falcon (responsability)',
          icon: 'hand-left-outline',
          handler: () => {
            this.mascotSelection = "Falcon",
                                      ////******* Activating filter *******//////

                                      this.rankingService.getRanking()
                                      .subscribe(async resp => {
                      
                      
                                        let res_: [] = await resp;
                      
                                        console.log(res_);
                      
                                        let data_obj = []
                      
                      
                                        res_['resp'].forEach(obj => {
                                          data_obj.push(JSON.parse(JSON.stringify(obj)))
                                        })
                      
                                        console.log(data_obj);
                      
                      
                      
                                        this.positions = generalFilter(data_obj, this.mascotSelection)  // this.positions=generalFilter(data_obj,'Jaguars')
                      
                      
                                        this.sum = 0
                      
                      
                                        this.positions.forEach(estu => {
                                          this.sum = this.sum + estu.completed;
                                        })
                      
                                        console.log('Total:', this.sum);
                                      })
                      
                      
                      
                                  ////xxxxxxxxxxxxxxxxxxxxxxxx******* Activating filter *******xxxxxxxxxxxx//////
            console.log(this.mascotSelection);
          }
        },
        {
          text: 'Eagle (respect)',
          icon: 'thumbs-up-outline',
          handler: () => {
            this.mascotSelection = "Eagle",
                                      ////******* Activating filter *******//////

                                      this.rankingService.getRanking()
                                      .subscribe(async resp => {
                      
                      
                                        let res_: [] = await resp;
                      
                                        console.log(res_);
                      
                                        let data_obj = []
                      
                      
                                        res_['resp'].forEach(obj => {
                                          data_obj.push(JSON.parse(JSON.stringify(obj)))
                                        })
                      
                                        console.log(data_obj);
                      
                      
                      
                                        this.positions = generalFilter(data_obj, this.mascotSelection)  // this.positions=generalFilter(data_obj,'Jaguars')
                      
                      
                                        this.sum = 0
                      
                      
                                        this.positions.forEach(estu => {
                                          this.sum = this.sum + estu.completed;
                                        })
                      
                                        console.log('Total:', this.sum);
                                      })
                      
                      
                      
                                  ////xxxxxxxxxxxxxxxxxxxxxxxx******* Activating filter *******xxxxxxxxxxxx//////
            console.log(this.mascotSelection);
          }
        },

        {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }]
    });
    await actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }





  /////////***************************** Action Sheet*****************************************////


  ngOnInit() {


  }




}  // Here you create an instances of the service