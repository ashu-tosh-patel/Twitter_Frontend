import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute, private profileService: ProfileService) { }

  userId !: number;
  user: any = null;
  followers: any = [];

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(profile => this.userId = profile['userId'])

    this.profileService.getUserDetails(this.userId).subscribe(res => {
      this.user = res;
    })

    this.profileService.getFollowers(this.userId).subscribe(res=>{
      this.followers = res;
    })
  }
}
