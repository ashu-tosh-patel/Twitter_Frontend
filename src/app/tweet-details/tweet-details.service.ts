import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tweetData } from '../tweet-component/tweetData';
import { Observable } from 'rxjs';
import { userData } from '../tweet-component/userData';

@Injectable({
  providedIn: 'root'
})
export class TweetDetailsService {

  constructor(private http: HttpClient) { }

  getTweetApi(): Observable<tweetData[]>{
    return this.http.get<tweetData[]>('http://localhost:8080/tweet-api/user/tweet')
  }

  getUsersApi(value: number): Observable<userData[]>{
    console.log(value)
    return this.http.get<userData[]>('http://localhost:8765/users/getUser/'+value)
  }
}
