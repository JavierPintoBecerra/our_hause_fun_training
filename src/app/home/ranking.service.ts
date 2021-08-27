import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
 
@Injectable({
  providedIn: 'root'
})
export class RankingService {

  

  constructor(private http:HttpClient) { }
  getRanking(){
    return this.http.get<any>("http://localhost:3000/")
    //return this.http.get<any>("https://jsonplaceholder.typicode.com/users")
  }
}
