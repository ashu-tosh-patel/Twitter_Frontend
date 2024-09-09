import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TweetComponentComponent } from './tweet-component/tweet-component.component';
import { ExploreBarComponent } from './explore-bar/explore-bar.component';

const routes: Routes = [
  {
    path:'explore-bar',component:ExploreBarComponent
  },
  {
    path:'tweet-component/:tweetId',component:TweetComponentComponent
  },
  {
    path:'**',redirectTo:'explore-bar',pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
