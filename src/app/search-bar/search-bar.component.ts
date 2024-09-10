import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { SearchService } from './search.service';
import { Router } from '@angular/router';
import { debounceTime, switchMap } from 'rxjs/operators'
import { tweetData } from '../tweet-component/tweetData';
import { userData } from './userData';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit{
  searchControl = new FormControl('')
  suggestions$: Observable<any[]> = of([])

  constructor(private searchService: SearchService, private router: Router){}

  ngOnInit(): void {
    this.getUserDetails()
    this.suggestions$ = this.searchControl.valueChanges.pipe(
      debounceTime(300),
      switchMap(value => this.getSuggestions(value))
    )
  }
  allSuggestions : userData[] = [] 
  errorMessage !: any 

  showclickedUser(value: number){
    this.router.navigate(['profile',value])
  }

  getSuggestions(query: any): Observable<any[]>{
    console.log(query)
    if(!query.trim()){
      return of([]);
    }
    const filteredSuggestions = this.allSuggestions.filter(item =>
      (item.name != null && item.name.toLowerCase().includes(query.toLowerCase())) ||
      (item.username != null && item.username.toLowerCase().includes(query.toLowerCase()) ) ||
      (item.bio != null && item.bio.toLowerCase().includes(query.toLowerCase()))
    )
    return of(filteredSuggestions)
  }

  getUserDetails(){
    this.searchService.getUserDetailsApi().subscribe(
      (data: userData[]) => {
        this.allSuggestions = data;
        console.log('Data recv',this.allSuggestions)
      },
      (error) => {
        this.errorMessage = error
      }
    )
  }

}
