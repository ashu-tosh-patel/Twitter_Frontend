import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  getUserDetails(userId: number) {
    console.log("in service", userId);
    return this.http.get('http://localhost:8765/users/getUser/' + userId);
  }

  getFollowers(userId: number) {
    return this.http.get("http://localhost:8082/followingAndFollower-api/followers/" + userId)
  }
  getFollowing(userId: number) {
    return this.http.get("http://localhost:8082/followingAndFollower-api/following/" + userId)
  }
  getUsersApi() {
    return this.http.get('http://localhost:8765/users/getAllUsersDetails')
  }
  follow(follower: number, following: number) {
    return this.http.post('http://localhost:8082/followingAndFollower-api/follow/' + follower + '/' + following, {});
  }
  unfollow(currentUserId: number, targetUserId: number) {
    console.log('Unfollow request',currentUserId,targetUserId)
    return this.http.delete('http://localhost:8082/followingAndFollower-api/unfollow/' + currentUserId + '/' + targetUserId);
  }
}