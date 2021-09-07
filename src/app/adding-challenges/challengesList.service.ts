import { Injectable } from '@angular/core';
import { Challenge } from './challenges.model';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class ChallengesListService {

  myDate=moment(new Date()).format('DD-MM-YYYY');
  
  private challenges: Challenge[] =[
    {
      id:'1',
      title: 'FLAMENCO STYLE',
      imageURL:'assets/gimandes_gifs/videos/flamenco_style.mp4',   // Testing the video
      description:['Put 3 objects on the floor and on one leg we must pick them up without the leg that is in the air touching the floor.'],
      challengeDate:'02-09-2021',
      todaysDate:this.myDate,
      checked: true
    },
    {
      id:'2',
      title: 'JUGGLE',
      imageURL:'assets/gimandes_gifs/videos/Juggle.mp4', 
      description:['With 2 or 3 objects. You must pass the objects from one hand to the other without falling to the floor.'],
      challengeDate:'04-09-2021',
      todaysDate:this.myDate,
      checked: false
    },
    {
      id:'3',
      title: 'BALANCE SQUAD',
      imageURL:'assets/gimandes_gifs/videos/balance_squad.mp4', 
      description:['Squat balancing with an object on your head. You must perform 20 squats with an object on your head without the object falling to the floor.'],
      challengeDate:'05-09-2021',
      todaysDate:this.myDate,
      checked: true
    },
    {
      id:'4',
      title: 'VOLLEY',
      imageURL:'assets/gimandes_gifs/videos/volley.mp4', 
      description:['10 touches with the arms to an object. You must make 10 touches with any part of the arm to an object without it falling to the ground..', 'It takes only 20 mins a day'],
      challengeDate:'06-09-2021',
      todaysDate:this.myDate,
      checked: false
    },
    {
      id:'5',
      title: 'SIT/KNEES BALANCE',
      imageURL:'assets/gimandes_gifs/videos/sit_and_balance.mp4', 
      description:['Sit or kneel and stand with an object on your head.'],
      challengeDate:'07-09-2021',
      todaysDate:this.myDate,
      checked: false
    },
    {
      id:'6',
      title: 'JUMPS AND TURNS',
      imageURL:'assets/gimandes_gifs/videos/jump_turn.mp4', 
      description:['You should jump and turn 180 degrees 10 times.'],
      challengeDate:'08-09-2021',
      todaysDate:this.myDate,
      checked: false
    },
    {
      id:'7',
      title: 'CRAZY FINGERS',
      imageURL:'assets/gimandes_gifs/videos/crazy_fingers.mp4', 
      description:['This is a coordination exercise, while one of your hands is moving up and down the other hand must be doing a triangle movement.'],
      challengeDate:'09-09-2021',
      todaysDate:this.myDate,
      checked: false
    },
    {
      id:'8',
      title: 'STEP DANCE',
      imageURL:'assets/gimandes_gifs/videos/step_dance.mp4', 
      description:['You must perform this coordination exercise by touching the inner edge of the right foot with the left hand and the heel of the left foot consecutively with the right hand.'],
      challengeDate:'10-09-2021',
      todaysDate:this.myDate,
      checked: false
    },
    {
      id:'9',
      title: 'Jordan ',
      imageURL:'assets/gimandes_gifs/videos/step_dance.mp4', 
      description:['Do five steps doing a deep squad and passing an object between your legs from one hand to another.'],
      challengeDate:'11-09-2021',
      todaysDate:this.myDate,
      checked: false
    },
    {
      id:'10',
      title: '90 Degrees',
      imageURL:'assets/gimandes_gifs/videos/Challenge20.mp4', 
      description:['In a squat position hold your back against a wall until your legs are parallel to the floor at 90 degrees, hold 1 minute or as long as possible.', 'It takes only 20 mins a day'],
      challengeDate:'12-09-2021',
      todaysDate:this.myDate,
      checked: false
    },
    {
      id:'11',
      title: 'STAND STICK',
      imageURL:'assets/gimandes_gifs/videos/broomstick.mp4', 
      description:['With a member of your family, each one must have a broomstick, they must be separated between 1 and 3 meters according to the difficulty that you want to put to the challenge. Each one holds the stick resting on the floor and on the count of 3 they must go to catch the other persons broomstick without it falling to the ground.', 'It takes only 20 mins a day'],
      challengeDate:'13-09-2021',
      todaysDate:this.myDate,
      checked: false
    },
    {
      id:'12',
      title: 'HIT THE BALL',
      imageURL:'assets/gimandes_gifs/videos/hit_theball.mp4', 
      description:['I must make 10 blows to the ball with the palm of the hand, if you want more difficulty you must alternately carry out the blows with the palm and the back of the hand without it falling to the floor.'],
      challengeDate:'14-09-2021',
      todaysDate:this.myDate,
      checked: false
    },
    {
      id:'13',
      title: 'AROUND THE WORLD',
      imageURL:'assets/gimandes_gifs/videos/aroundtheworld.mp4', 
      description:['You must throw an object over your head backwards and manage to catch it without it falling to the ground.'],
      challengeDate:'15-09-2021',
      todaysDate:this.myDate,
      checked: false
    },
    {
      id:'14',
      title: 'ONE LEG',
      imageURL:'assets/gimandes_gifs/videos/step_dance.mp4', 
      description:['You should sit in a chair and stand up on one leg 10 times without the help of my hands.'],
      challengeDate:'16-09-2021',
      todaysDate:this.myDate,
      checked: false
    },
    {
      id:'15',
      title: 'BASCKET PLANK',
      imageURL:'assets/gimandes_gifs/videos/basket_plank.mp4', 
      description:['In plank position you must make 5 objects in a container. If you find it difficult to do the plank, you can do it with your knees supported or on your feet.'],
      challengeDate:'17-09-2021',
      todaysDate:this.myDate,
      checked: false
    },
    {
      id:'16',
      title: 'TWO KICKS',
      imageURL:'assets/gimandes_gifs/videos/two_kicks.mp4', 
      description:['You must place two bottles on the floor and you must be in the middle of the two bottles, with a jump you must kick the two bottles in such a way that they fall.'],
      challengeDate:'18-09-2021',
      todaysDate:this.myDate,
      checked: false
    },
    {
      id:'17',
      title: 'FOUR KICKS',
      imageURL:'assets/gimandes_gifs/videos/four-kicks.mp4', 
      description:['You must place 4 bottles on the floor forming a rhombus, you must be in the middle of them and with two jumps you must kick the bottles and they will fall.'],
      challengeDate:'19-09-2021',
      todaysDate:this.myDate,
      checked: false
    },
    {
      id:'18',
      title: 'SPEED REACTION',
      imageURL:'assets/gimandes_gifs/videos/speed_reaction.mp4', 
      description:['With a member of your family they will stand in front of the other, one of the two will have two objects in their hands, on the count of 3 they will throw these objects at the other person and they will have to grab them at the same time avoiding so they fall to the floor.'],
      challengeDate:'20-09-2021',
      todaysDate:this.myDate,
      checked: false
    },
    {
      id:'19',
      title: 'CORDINATION',
      imageURL:'assets/gimandes_gifs/videos/coordination.mp4', 
      description:['This is a coordination exercise, you must touch the thigh with the palm of your hands twice raising the knees to the chest and twice you must touch the heels bringing the feet to the tail.'],
      challengeDate:'21-09-2021',
      todaysDate:this.myDate,
      checked: false
    },
  
    {
      id:'20',
      title: 'STAND UP',
      imageURL:'assets/gimandes_gifs/videos/stand_up.mp4', 
      description:['In a sitting position you should stand up without resting your hands on the ground.', 'It takes only 20 mins a day'],
      challengeDate:'22-09-2021',
      todaysDate:this.myDate,
      checked: false
    }
  ]
  


  constructor() { }

  getChallenges(){
    return[...this.challenges]
  }
  
  getChallenge(challengeId: string){
  return{
      ...this.challenges.find(challenge => {
        return challenge.id === challengeId
      })
   }
  }

  updateChallenge(title: string, imageURL: string){
    //How to create an update method...'????
  }

  /*addChallenge(title: string, imageURL:string){ 
    this.challenges.push({
      title,
      imageURL, 
      id: this.challenges.length +1 +"",
      description:[],
      challengeState:new Date()    // New element for adding the state
    })
  }*/

 /*deleteChallenge(challengeId: string){
    this.challenges= this.challenges.filter(challge=>{
      return challengeId !== challengeId  
    })
  }*/

}