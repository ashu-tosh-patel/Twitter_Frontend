import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute, private profileService: ProfileService) { }

  userId !: number;
  user: any = null;
  allUsers: any = null;
  followersIds: any = [];
  followers: any = [];
  followings: any = [];
  tweets: any = [];
  followingsIds: any = [];

  currentLoggedIn: number = 1;

  checkForFollow(): boolean {
    if (this.userId === this.currentLoggedIn) return false;
    for (var i in this.followersIds) {
      if (parseInt(i) == this.currentLoggedIn) return false;
    }
    return true;
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(profile => this.userId = profile['userId'])
    console.log("in component", this.userId)

    this.profileService.getUserDetails(this.userId).subscribe(res => {
      this.user = res;
      // console.log("got response", this.user);
      this.tweets = this.user.tweetDTOs;
      // console.log("tweets", this.tweets);
    })
    this.profileService.getFollowers(this.userId).subscribe(res => {
      this.followersIds = res;
      console.log("followersIDs:", this.followersIds);
    })
    this.profileService.getFollowing(this.userId).subscribe(res => {
      this.followingsIds = res;
    })
    this.profileService.getUsersApi().subscribe(res => {
      this.allUsers = res;
      console.log(this.allUsers)
      this.followers = this.allUsers.filter((u: any) => this.followersIds.includes(u.id));
      console.log(this.followers);
      this.followings = this.allUsers.filter((u: any) => this.followingsIds.includes(u.id));
    })
    this.activatedRoute.params.subscribe(res => this.currentLoggedIn = res['loggedInUserId'])
    console.log(this.currentLoggedIn)
  }

  followed() {
    alert("Followed");
    this.profileService.follow(this.currentLoggedIn, this.userId).subscribe(res => {
      console.log(res);

    }, err => {
      console.log(err);
    })
  }

  removeFollower(userId: number) {
    alert("Remove Follower request for : " + userId);
  }
  removeFollowing(userId: number) {
    alert("Remove follower request for : " + userId);
  }

}
