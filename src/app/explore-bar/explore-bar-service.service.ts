import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { tweetsData } from './tweetsData';
@Injectable({
  providedIn: 'root'
})
export class ExploreBarServiceService {

  constructor(private http: HttpClient) { }

  getTweets(): Observable<tweetsData[]>{
    return this.http.get<tweetsData[]>('http://localhost:8080/tweet-api/user/tweet')
  }
} 

function Of(): Observable<any> {
  throw new Error('Function not implemented.');
}