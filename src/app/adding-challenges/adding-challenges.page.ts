import { Component, OnInit } from '@angular/core';
import { ChallengesListService } from './challengesList.service';
import {Router} from '@angular/router';
import { Storage } from '@capacitor/storage';

@Component({
  selector: 'app-adding-challenges',
  templateUrl: './adding-challenges.page.html',
  styleUrls: ['./adding-challenges.page.scss'],
})
export class AddingChallengesPage implements OnInit {
  


  public text:string=''

  public  checkName=async()=>{
    let {value}=await Storage.get({key:'id'})

    return value;
    
  }

  public name:string='';

  challenges =[];

  constructor(private ChallengesListService: ChallengesListService,
    public router: Router) {

      
    }      

 async ngOnInit() {
    
  const name = await this.checkName()

  this.text=`from ngOnInit: ${name}`;
  console.log(`from ngOnInit: ${name}`)
  
  this.challenges=this.ChallengesListService.getChallenges();  //for printing the data from challenges service
    console.log(this.challenges);
   
  }

  public goChallengeInfo(id: number){
    console.log(id)
    this.router.navigate([`../adding-challenges/challengeinfo`,{challengeId:id}])
  }

  goToHome(){
    this.router.navigate(['/home'])
  }

}