import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
 
@Injectable({
  providedIn: 'root'
})
export class RankingService {

  

  constructor(private http:HttpClient) { }
  getRanking(){
    return this.http.get<any>("http://204.48.22.71/")  //  http://localhost:3000/ for local and for Digital Ocean http://204.48.22.71/
    
  }
}
