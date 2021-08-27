import { Injectable } from '@angular/core';
import { Challenge } from './challenges.model';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class ChallengesService {

  myDate=moment(new Date()).format('DD-MM-YYYY');
  
  private challenges: Challenge[] =[
    {
      id:'1',
      title: 'FLAMENCO STYLE',
      imageURL:'assets/gimandes_gifs/flamenco_style.gif', 
      description:['Put 3 objects on the floor and on one leg we must pick them up without the leg that is in the air touching the floor.', 'It takes only 20 mins a day'],
      challengeDate:'26-08-2021',
      todaysDate:this.myDate,
      checked: true
    },
    {
      id:'2',
      title: 'JUGGLE',
      imageURL:'assets/gimandes_gifs/Juggle.gif', 
      description:['With 2 or 3 objects. You must pass the objects from one hand to the other without falling to the floor.', 'It takes only 20 mins a day'],
      challengeDate:'26-08-2021',
      todaysDate:this.myDate,
      checked: false
    },
    {
      id:'3',
      title: 'BALANCE SQUAD',
      imageURL:'assets/gimandes_gifs/balance_squad.gif', 
      description:['Squat balancing with an object on your head. You must perform 20 squats with an object on your head without the object falling to the floor.', 'It takes only 20 mins a day'],
      challengeDate:'25-08-2021',
      todaysDate:this.myDate,
      checked: true
    },
    {
      id:'4',
      title: 'VOLLEY',
      imageURL:'assets/gimandes_gifs/volley.gif', 
      description:['10 touches with the arms to an object. You must make 10 touches with any part of the arm to an object without it falling to the ground..', 'It takes only 20 mins a day'],
      challengeDate:'25-08-2021',
      todaysDate:this.myDate,
      checked: false
    },
    {
      id:'5',
      title: 'SIT/KNEES BALANCE',
      imageURL:'assets/gimandes_gifs/sit_balance.gif', 
      description:['Sit or kneel and stand with an object on your head.', 'It takes only 20 mins a day'],
      challengeDate:'28-08-2021',
      todaysDate:this.myDate,
      checked: false
    },
    {
      id:'6',
      title: 'JUMPS AND TURNS',
      imageURL:'assets/gimandes_gifs/jump_turn.gif', 
      description:['You should jump and turn 180 degrees 10 times.', 'It takes only 20 mins a day'],
      challengeDate:'28-08-2021',
      todaysDate:this.myDate,
      checked: false
    },
    {
      id:'7',
      title: 'CRAZY FINGERS',
      imageURL:'assets/gimandes_gifs/crazy_fingers.gif', 
      description:['This is a coordination exercise, while one of your hands is moving up and down the other hand must be doing a triangle movement.', 'It takes only 20 mins a day'],
      challengeDate:'28-08-2021',
      todaysDate:this.myDate,
      checked: false
    },
    {
      id:'8',
      title: 'STEP DANCE',
      imageURL:'assets/gimandes_gifs/step_dance.gif', 
      description:['You must perform this coordination exercise by touching the inner edge of the right foot with the left hand and the heel of the left foot consecutively with the right hand.', 'It takes only 20 mins a day'],
      challengeDate:'27-08-2021',
      todaysDate:this.myDate,
      checked: false
    },
    {
      id:'9',
      title: 'TIKTOKERS ',
      imageURL:'https://static-bebeautiful-in.unileverservices.com/how-to-do-basic-squats.gif', 
      description:['', 'It takes only 20 mins a day'],
      challengeDate:'24-08-2021',
      todaysDate:this.myDate,
      checked: false
    },
    {
      id:'10',
      title: '90 Degrees',
      imageURL:'assets/gimandes_gifs/90_degrees.gif', 
      description:['In a squat position hold your back against a wall until your legs are parallel to the floor at 90 degrees, hold 1 minute or as long as possible.', 'It takes only 20 mins a day'],
      challengeDate:'24-08-2021',
      todaysDate:this.myDate,
      checked: false
    },
    {
      id:'11',
      title: 'STAND STICK',
      imageURL:'assets/gimandes_gifs/broomstick.gif', 
      description:['With a member of your family, each one must have a broomstick, they must be separated between 1 and 3 meters according to the difficulty that you want to put to the challenge. Each one holds the stick resting on the floor and on the count of 3 they must go to catch the other persons broomstick without it falling to the ground.', 'It takes only 20 mins a day'],
      challengeDate:'24-08-2021',
      todaysDate:this.myDate,
      checked: false
    },
    {
      id:'12',
      title: 'HIT THE BALL',
      imageURL:'assets/gimandes_gifs/hit_theball.gif', 
      description:['I must make 10 blows to the ball with the palm of the hand, if you want more difficulty you must alternately carry out the blows with the palm and the back of the hand without it falling to the floor.', 'It takes only 20 mins a day'],
      challengeDate:'24-08-2021',
      todaysDate:this.myDate,
      checked: false
    },
    {
      id:'13',
      title: 'AROUND THE WORLD',
      imageURL:'assets/gimandes_gifs/aroundtheworld.gif', 
      description:['You must throw an object over your head backwards and manage to catch it without it falling to the ground.', 'It takes only 20 mins a day'],
      challengeDate:'24-08-2021',
      todaysDate:this.myDate,
      checked: false
    },
    {
      id:'14',
      title: 'ONE LEG',
      imageURL:'https://www.spotebi.com/wp-content/uploads/2014/10/squat-exercise-illustration.jpg', 
      description:['You should sit in a chair and stand up on one leg 10 times without the help of my hands.', 'It takes only 20 mins a day'],
      challengeDate:'24-08-2021',
      todaysDate:this.myDate,
      checked: false
    },
    {
      id:'15',
      title: 'BASCKET PLANK',
      imageURL:'assets/gimandes_gifs/basket_plank.gif', 
      description:['In plank position you must make 5 objects in a container. If you find it difficult to do the plank, you can do it with your knees supported or on your feet.', 'It takes only 20 mins a day'],
      challengeDate:'24-08-2021',
      todaysDate:this.myDate,
      checked: false
    },
    {
      id:'16',
      title: 'TWO KICKS',
      imageURL:'assets/gimandes_gifs/two_kicks.gif', 
      description:['You must place two bottles on the floor and you must be in the middle of the two bottles, with a jump you must kick the two bottles in such a way that they fall.', 'It takes only 20 mins a day'],
      challengeDate:'24-08-2021',
      todaysDate:this.myDate,
      checked: false
    },
    {
      id:'17',
      title: 'FOUR KICKS',
      imageURL:'assets/gimandes_gifs/four_kicks.gif', 
      description:['You must place 4 bottles on the floor forming a rhombus, you must be in the middle of them and with two jumps you must kick the bottles and they will fall.', 'It takes only 20 mins a day'],
      challengeDate:'24-08-2021',
      todaysDate:this.myDate,
      checked: false
    },
    {
      id:'18',
      title: 'SPEED REACTION',
      imageURL:'assets/gimandes_gifs/speed_reaction.gif', 
      description:['With a member of your family they will stand in front of the other, one of the two will have two objects in their hands, on the count of 3 they will throw these objects at the other person and they will have to grab them at the same time avoiding so they fall to the floor.', 'It takes only 20 mins a day'],
      challengeDate:'24-08-2021',
      todaysDate:this.myDate,
      checked: false
    },
    {
      id:'19',
      title: 'CORDINATION',
      imageURL:'assets/gimandes_gifs/coordination.gif', 
      description:['This is a coordination exercise, you must touch the thigh with the palm of your hands twice raising the knees to the chest and twice you must touch the heels bringing the feet to the tail.', 'It takes only 20 mins a day'],
      challengeDate:'24-08-2021',
      todaysDate:this.myDate,
      checked: false
    },
  
    {
      id:'20',
      title: 'STAND UP',
      imageURL:'assets/gimandes_gifs/stand_up.gif', 
      description:['In a sitting position you should stand up without resting your hands on the ground.', 'It takes only 20 mins a day'],
      challengeDate:'24-08-2021',
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