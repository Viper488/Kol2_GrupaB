import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AhForumComponent } from './ah-forum/ah-forum.component';
import { AhForumItemComponent } from './ah-forum-item/ah-forum-item.component';
import { AhForumDetailsComponent } from './ah-forum-details/ah-forum-details.component';
import {HttpClientModule} from "@angular/common/http";
import {AHDataService} from "./services/ah-data.service";

@NgModule({
  declarations: [
    AppComponent,
    AhForumComponent,
    AhForumItemComponent,
    AhForumDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    AHDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
