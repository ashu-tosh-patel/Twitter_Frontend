import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) { }


  submitUserDataApi(formValue : any): Observable<any>{
    console.log(formValue)
    return this.http.post('http://localhost:8765/users/userRegistration',formValue,{responseType:'text'})
  }
}
