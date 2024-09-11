import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { userData } from '../tweet-component/userData';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) { }


  submitUserDataApi(formValue : any): Observable<any>{
    console.log(formValue)
    return this.http.post('http://localhost:8765/users/userRegistration',formValue,{responseType:'text'})
  }

  getUserInfoApi(email : string): Observable<userData>{
    return this.http.get<userData>('http://localhost:8765/users/getUserDetails/'+email)
  }
}
