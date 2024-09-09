import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http:HttpClient) { }

  getUserDetails(userId:number){
    return this.http.get('http://localhost:8765/users/getUser/'+userId);
  }

  getFollowers(userId:number){
    return this.http.get("http://localhost:8082/followingAndFollower-api/followers/"+userId)
  }
}
