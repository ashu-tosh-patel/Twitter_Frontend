import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TweetService } from './tweet.service';
import { tweetData } from './tweetData';
import { userData } from './userData';
// import { tweetsData } from './userData';

@Component({
  selector: 'app-tweet-component',
  templateUrl: './tweet-component.component.html',
  styleUrls: ['./tweet-component.component.css']
})
export class TweetComponentComponent implements OnInit {

  // tweetId !: number
  // constructor(private _aRoute: ActivatedRoute, private tweetService: TweetService) { }
  // tweetsByUser: tweetData[] = []
  // errorMessage: any = null
  // tweetWithId: tweetData[] = []
  // userDetails: userData[] = []
  // userDetailsById: userData[] = []

  @Input()
  user:any=null;

  @Input()
  tweets:any=[];

  ngOnInit(): void {
    
  }
  // Get user id of that user
  // userIdOfUser !: any

  // ngOnInit(): void {
  //   this._aRoute.params.subscribe(
  //     value => this.tweetId = value['tweetId']
  //   )
  //   this.getTweetsOfUser()
  //   this.getUserDetails()
  //   // this.tweetWithId = this.tweetsByUser
    
    
  // }

  // getTweetsOfUser() {
  //   this.tweetService.getAllTweets().subscribe(
  //     (data: tweetData[]) => {
  //       this.tweetsByUser = data;
  //       this.tweetWithId = this.tweetsByUser.filter((x) => x.id == this.tweetId)
  //       this.userIdOfUser = this.tweetWithId.at(0)?.userId
  //       console.log(this.userIdOfUser)
  //     },
  //     (error) => {
  //       this.errorMessage = error
  //     }
  //   )
  // }
  // getUserDetails(){
  //   this.tweetService.getUserDetails().subscribe(
  //     (data: any[]) => {
  //       this.userDetails = data;
  //       this.userDetailsById = this.userDetails.filter((x) => x.id === this.userIdOfUser)
  //       console.log(this.userDetailsById)
  //     },
  //     (error) => {
  //       this.errorMessage = error
  //     }
  //   )
  // }
}
