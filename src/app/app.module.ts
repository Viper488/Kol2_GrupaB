import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AhForumComponent } from './ah-forum/ah-forum.component';
import { AhForumItemComponent } from './ah-forum-item/ah-forum-item.component';
import { AhForumDetailsComponent } from './ah-forum-details/ah-forum-details.component';

@NgModule({
  declarations: [
    AppComponent,
    AhForumComponent,
    AhForumItemComponent,
    AhForumDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
