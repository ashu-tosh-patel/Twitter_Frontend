import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { userData } from './userData';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  getUserDetailsApi(): Observable<userData[]>{
    return this.http.get<userData[]>('http://localhost:8765/users/getAllUsersDetails')
  }
}
