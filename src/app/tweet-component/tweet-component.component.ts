import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TweetService } from './tweet.service';
import { tweetData } from './tweetData';
// import { tweetsData } from './userData';

@Component({
  selector: 'app-tweet-component',
  templateUrl: './tweet-component.component.html',
  styleUrls: ['./tweet-component.component.css']
})
export class TweetComponentComponent implements OnInit {

  tweetId !: number
  constructor(private _aRoute: ActivatedRoute, private tweetService: TweetService) { }
  tweetsByUser: tweetData[] = []
  errorMessage: any = null
  // tweetWithId: tweetsData[] = []
  userDetails: any[] = []
  userDetailsById: any[] = []

  ngOnInit(): void {
    this._aRoute.params.subscribe(
      value => this.tweetId = value['tweetId']
    )
    // this.getTweetsOfUser()
    this.getUserDetails()
    // this.tweetWithId = this.tweetsByUser
    
    
  }

  // getTweetsOfUser() {
  //   this.tweetService.getAllTweets().subscribe(
  //     (data: tweetsData[]) => {
  //       this.tweetsByUser = data;
  //       this.tweetWithId = this.tweetsByUser.filter((x) => x.id == this.tweetId)
  //       // console.log("hii from inside");
  //       // console.log('Data recv',this.tweetsByUser)
  //     },
  //     (error) => {
  //       this.errorMessage = error
  //     }
  //   )
  //   // console.log("hii");
  //   // console.log(this.tweetsByUser)
  // }
  getUserDetails(){
    this.tweetService.getUserDetails().subscribe(
      (data: any[]) => {
        this.userDetails = data;
        // this.tweetsByUser = this.userDetails.at(this.u)
      },
      (error) => {
        this.errorMessage = error
      }
    )
  }
}
