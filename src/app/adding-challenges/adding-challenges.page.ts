import { Component, OnInit } from '@angular/core';
import { ChallengesService } from './challenges.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-adding-challenges',
  templateUrl: './adding-challenges.page.html',
  styleUrls: ['./adding-challenges.page.scss'],
})
export class AddingChallengesPage implements OnInit {

  challenges =[]
  constructor(private challengesService: ChallengesService,
    public router: Router) { }      

  ngOnInit() {
    this.challenges=this.challengesService.getChallenges();  //for printing the data
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