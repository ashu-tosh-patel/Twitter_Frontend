import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SideBarService {

  constructor(private http: HttpClient) { }

  uploadTweet(tweet: any,userId: number):Observable<any>{
    return this.http.post(`http://localhost:8080/tweet-api/user/${userId}/tweet`,tweet);
  }
}
