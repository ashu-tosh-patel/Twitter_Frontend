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
import { HomePageComponent } from './home-page/home-page.component';
import { CommingSoonComponent } from './comming-soon/comming-soon.component';

const routes: Routes = [
  {
    path: 'home-page', component: HomePageComponent
  },
  {
    path: 'profile/:userId/current/:loggedInUserId', component: ProfileComponent
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
    path: 'feed/:userId', component: FeedComponent
  },
  {
    path: 'landing-page/:userId', component: LandingPageComponent
  },
  {
    path: 'tweet-detail/:tweetId', component: TweetDetailsComponent
  },
  {
    path: 'soon', component:CommingSoonComponent
  },
  {
    path: '**', redirectTo: '/home-page', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
