import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { userData } from '../tweet-component/userData';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm !: FormGroup
  emailIncoming: string = ''
  passwordIncoming: string = ''

  userDetails !: userData[]
  errorMessageApi !: any

  userDetailsFiltered !: userData[]
  validCredentials !: boolean
  emailExists: boolean = false
  displayError : any = null
  errorMessage !: any

  constructor(private loginServcie: LoginService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getUserDetailsOfUser()

    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern("[a-z._0-9]+[@][a-z]+[.](com|org|in)")]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]]
    })
    // ,Validators.pattern("[A-Za-z0-9!@_]+"
  }

  verifyCredentials() {
    console.log('Here inside verify credentials')
    this.emailExists = false
    this.validCredentials = false
    this.displayError = null
    // this.userDetails.forEach((x) => x.email === this.emailIncoming ?
    //   this.emailExists = true : this.emailExists = false)
    for(let i = 0;i < this.userDetails.length;i++){
      if(this.userDetails.at(i)?.email == this.emailIncoming){
        this.emailExists = true
      }
    }
    console.log('Email exists',this.emailExists)  
    if (this.emailExists) {
      this.userDetailsFiltered = this.userDetails.filter((x) => x.email == this.emailIncoming)
      if (this.userDetailsFiltered[0].email == this.emailIncoming &&
        this.userDetailsFiltered[0].password == this.passwordIncoming) {
        this.validCredentials = true
      }else{
        this.displayError = "Password is not correct for this email"
      }
    }else{
      this.displayError = "No such user exists. Enter valid email id and password"
    }
    if (this.validCredentials) {
      this.router.navigate(['/landing-page', this.userDetailsFiltered[0].id])
    }
  }


  getUserDetailsOfUser() {
    this.loginServcie.getUserWithEmailApi().subscribe(
      (data: userData[]) => {
        this.userDetails = data,
        console.log('Here in login component',this.userDetails)
      },
      error => this.errorMessageApi = error,
    )
  }
}
