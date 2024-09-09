import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { userData } from '../tweet-component/userData';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  constructor(private http: HttpClient) { }

  getFollowingIdApi(userId: number) : Observable<number[]>{
    return this.http.get<number[]>('http://localhost:8082/followingAndFollower-api/following/'+5)
  }

  getUsersApi() : Observable<userData[]>{
    return this.http.get<userData[]>('http://localhost:8765/users/getAllUsersDetails')
  }
}
