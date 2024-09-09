import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TweetComponentComponent } from './tweet-component/tweet-component.component';
import { ExploreBarComponent } from './explore-bar/explore-bar.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';

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
    path: '**', redirectTo: 'explore-bar', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
