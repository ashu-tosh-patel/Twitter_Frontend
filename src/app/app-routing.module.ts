import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TweetComponentComponent } from './tweet-component/tweet-component.component';
import { ExploreBarComponent } from './explore-bar/explore-bar.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { FeedComponent } from './feed/feed.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { TweetDetailsComponent } from './tweet-details/tweet-details.component';

const routes: Routes = [
  {
    path: 'profile/:userId', component: ProfileComponent
  },
  {
    path: 'explore-bar', component: ExploreBarComponent
  },
  {
    path: 'tweet-component/:tweetId', component: TweetComponentComponent
  },
  {
    path: 'signup', component: SignupComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path:'feed/:userId',component:FeedComponent
  },
  {
    path:'landing-page',component:LandingPageComponent
  },
  {
    path:'tweet-detail/:tweetId',component:TweetDetailsComponent
  },
  {
    path: '**', redirectTo: '/signup', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
