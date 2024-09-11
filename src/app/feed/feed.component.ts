import { Component, Input, OnInit } from '@angular/core';
import { FeedService } from './feed.service';
import { userData } from '../tweet-component/userData';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit{

  followingList: number[] = []
  usersList: userData[] = []
  usersProfileForFeed : userData[] = []
  errorFollowingApi !: any
  errorUserApi !: any

  @Input()
  userId !: number

  constructor(private feedService: FeedService){}

  // Fetch userId of user from After successfull Login

  ngOnInit(): void {
    this.getFollowingList();
    this.getUsersList();
    console.log("in feed",this.userId)
  }

  getFollowingList(){
    this.feedService.getFollowingIdApi(this.userId).subscribe(
      list => this.followingList = list,
      error => this.errorFollowingApi = error
    )
  }

  getUsersList(){
    this.feedService.getUsersApi().subscribe(
      (list : userData[]) => {
        this.usersList = list,
        this.usersProfileForFeed = this.usersList.filter((x) => this.followingList.includes(x.id))
        console.log('Data received of Users',this.usersProfileForFeed)
      },
      (error) => {
        this.errorUserApi = error
      }
    )
  }
}
