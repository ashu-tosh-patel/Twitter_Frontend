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
  // errorInvalidCredentials : boolean = false
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
    this.errorMessage = null
    this.validCredentials = false
    this.userDetailsFiltered = this.userDetails.filter((x) => x.email == this.emailIncoming)
    if (this.userDetailsFiltered[0].email == this.emailIncoming &&
      this.userDetailsFiltered[0].password == this.passwordIncoming) 
      {
      this.validCredentials = true
    }
    if (this.validCredentials) {
      this.router.navigate(['/landing-page', this.userDetailsFiltered[0].id])
    }
  }

  getUserDetailsOfUser() {
    this.loginServcie.getUserWithEmailApi().subscribe(
      (data: userData[]) => {
        this.userDetails = data
      },
      error => this.errorMessageApi = error,
    )
  }
}
