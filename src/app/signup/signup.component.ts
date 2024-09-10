import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from './signup.service';
import { userData } from '../tweet-component/userData';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUpForm !: FormGroup
  // cpass: string = ''
  successMessage : any = null
  errorMessage : any = null

  // formDetails !: userData

  constructor(private fb: FormBuilder,private router:Router,private signupService:SignupService) { }

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern("[A-Z][A-Za-z]+( [A-Z][A-Za-z]+)*")]],
      username: ['', [Validators.required, Validators.pattern("[A-Za-z._]+[0-9]{2,4}")]],
      email: ['', [Validators.required, Validators.pattern("[a-z._0-9]+[@][a-z]+[.](com|org|in)")]],
      password: ['', [Validators.required,Validators.minLength(8),Validators.maxLength(16)]],
      // cpassword: ['', [Validators.required,this.confirmPassValidation]]
    })
  }

  // confirmPassValidation(c: FormControl) {
  //   return c.value == this.cpass ? null :
  //     {
  //       error: {
  //         invalidPass: "This should be same as Password"
  //       }
  //     }
  // }
  submitBtn() {
    console.log('Submit Btn Clicked')
    this.successMessage = null;
    this.errorMessage = null;
    // this.formDetails = this.signUpForm.value
    this.signupService.submitUserDataApi(this.signUpForm.value).subscribe(
      val => this.successMessage = val,
      error => this.errorMessage = "Not Able to Proceed with your request.Please try again later"
    )
    // console.log('Data here',this.formDetails)
  }

  navigateLogin(){
    this.router.navigate(['/login'])
  }
}
