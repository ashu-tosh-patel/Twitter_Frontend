import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tweetData } from '../tweet-component/tweetData';
import { TweetDetailsService } from './tweet-details.service';
import { userData } from '../tweet-component/userData';

@Component({
  selector: 'app-tweet-details',
  templateUrl: './tweet-details.component.html',
  styleUrls: ['./tweet-details.component.css']
})
export class TweetDetailsComponent implements OnInit{

  tweetId !: number
  userId !: number

  tweetArray !: tweetData[]
  filteredTweetArray !: tweetData[]

  userArray !: userData[]
  constructor(private _aRoute: ActivatedRoute,private detailsService: TweetDetailsService){}

  ngOnInit(): void {
    this._aRoute.params.subscribe(
      value => this.tweetId = value['tweetId']
    )
    console.log(this.tweetId)
    this.getAllTweets()
    this.getAllUsers()
  }

  getAllTweets(){
    this.detailsService.getTweetApi().subscribe(
      (data : tweetData[]) => {
        this.tweetArray = data,
        this.filteredTweetArray = this.tweetArray.filter((x) => x.id == this.tweetId)
        this.userId = this.filteredTweetArray[0].userId
        console.log('Data recieved',this.userId)
        this.detailsService.getUsersApi(this.userId).subscribe(
          (data : userData[]) => {
            this.userArray = data,
            console.log('Data recieved user array in tweet details',this.userArray)
          }
        )
      }
    )
    
  }

  getAllUsers(){
    
  }



}
