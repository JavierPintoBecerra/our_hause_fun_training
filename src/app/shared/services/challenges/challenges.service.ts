import { Injectable } from '@angular/core';
import {Challenge} from '../../interfaces/challenges';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChallengesService {



  public endPonint='http://localhost:3000/';

  constructor(
    private http: HttpClient,
  ) { }

  /**
   * 
   * @param challenge
   * @returns 
   */
  public create(challenge: Challenge ){
    return this.http.post(this.endPonint,challenge);
  }

 /**
  * 
  * @returns 
  */
  public consultAll( ){
    return this.http.get(this.endPonint);
  }

  /**
   * 
   * @param id is the id of student
   * @returns 
   */
  public consultOne(id: string){
    return this.http.get(`${this.endPonint}${id}`);
  }

  public update(id: string, dataToUpdate: any){
    return this.http.put(`${this.endPonint}${id}`,dataToUpdate);
  }



}
