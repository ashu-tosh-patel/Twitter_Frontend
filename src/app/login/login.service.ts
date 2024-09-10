import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { userData } from '../tweet-component/userData';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  getUserWithEmailApi(): Observable<userData[]>{
    return this.http.get<userData[]>('http://localhost:8765/users/getAllUsersDetails')
  }
}
