import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StreamAddActivityComponent } from './stream-add-activity/stream-add-activity.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AddActivityPageComponent } from './add-activity-page/add-activity-page.component';
import { TopNavBarComponent } from './top-nav-bar/top-nav-bar.component';
import { GetFeedPageComponent } from './get-feed-page/get-feed-page.component';
import { StreamFetchFeedComponent } from './stream-fetch-feed/stream-fetch-feed.component';

@NgModule({
  declarations: [
    AppComponent,
    StreamAddActivityComponent,
    HomePageComponent,
    AddActivityPageComponent,
    GetFeedPageComponent,
    TopNavBarComponent,
    GetFeedPageComponent,
    StreamFetchFeedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
