import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit{

  userIdFromUrl !: number

  constructor(private _aRoute:ActivatedRoute){}

  ngOnInit(): void {
    this._aRoute.params.subscribe(
      value => this.userIdFromUrl = value['userId']
    )
    // console.log(this.userIdFromUrl)
  }
}
