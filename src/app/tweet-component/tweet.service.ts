import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tweetData } from './tweetData';
// import { tweetData } from './userData';

@Injectable({
  providedIn: 'root'
})
export class TweetService {

  constructor(private http: HttpClient) { }

  // getAllTweets(): Observable<tweetData[]>{
  //   // let params = new HttpParams().set('id',value.toString()) 
  //   return this.http.get<tweetData[]>('http://localhost:8080/tweet-api/user/tweet')
  // }
  // getUserDetails(): Observable<any>{
  //   return this.http.get<any>('http://localhost:8765/users/getAllUsersDetails')
  // }
}
function Of(): Observable<any> {
  throw new Error('Function not implemented.');
}