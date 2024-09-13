import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ExploreBarComponent } from './explore-bar/explore-bar.component';
import { FeedComponent } from './feed/feed.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExploreBarServiceService } from './explore-bar/explore-bar-service.service';
import { HttpClientModule } from '@angular/common/http';
import { TweetComponentComponent } from './tweet-component/tweet-component.component';
import { ProfileComponent } from './profile/profile.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { TweetDetailsComponent } from './tweet-details/tweet-details.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CommingSoonComponent } from './comming-soon/comming-soon.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    SearchBarComponent,
    ExploreBarComponent,
    FeedComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    TweetComponentComponent,
    ProfileComponent,
    LandingPageComponent,
    TweetDetailsComponent,
    HomePageComponent,
    CommingSoonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ExploreBarServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
