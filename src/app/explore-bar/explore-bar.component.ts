import { Component, OnInit } from '@angular/core';
import { ExploreBarServiceService } from './explore-bar-service.service';
import { FormControl } from '@angular/forms';
import { debounceTime, switchMap } from 'rxjs/operators'
import { Observable,of } from 'rxjs';
import { tweetsData } from './tweetsData';
import { Router } from '@angular/router';

@Component({
  selector: 'app-explore-bar',
  templateUrl: './explore-bar.component.html',
  styleUrls: ['./explore-bar.component.css']
})
export class ExploreBarComponent implements OnInit{

  searchControl = new FormControl('')
  suggestions$: Observable<any[]> = of([])

  constructor(private exploreBarService: ExploreBarServiceService, private router: Router){}

  allSuggestions : tweetsData[] = [] 
  errorMessage !: any 

  ngOnInit(){
    this.getTweets()
    this.suggestions$ = this.searchControl.valueChanges.pipe(
      debounceTime(300),
      switchMap(value => this.getSuggestions(value))
    )
  }

  getSuggestions(query: any): Observable<any[]>{
    if(!query.trim()){
      return of([]);
    }
    const filteredSuggestions = this.allSuggestions.filter(item =>
      item.hashtags.some(
        tag => tag.toLowerCase().includes(query.toLowerCase())
      ) || item.message.toLowerCase().includes(query.toLowerCase())
    )
    return of(filteredSuggestions)
  }

  getTweets(){
    this.exploreBarService.getTweets().subscribe(
      (data: tweetsData[]) => {
        this.allSuggestions = data;
        console.log('Data recv',this.allSuggestions)
      },
      (error) => {
        this.errorMessage = error
      }
    )
  }

  showclickedTweet(value: number){
    // console.log(str)
    this.router.navigate(['/tweet-component',value])
  }

}
