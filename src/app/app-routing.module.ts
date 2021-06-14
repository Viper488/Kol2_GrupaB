import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AhForumComponent} from "./ah-forum/ah-forum.component";
import {AhForumDetailsComponent} from "./ah-forum-details/ah-forum-details.component";

const routes: Routes = [
  {
    path: '',
    component: AhForumComponent
  },
  {
    path: 'detail/:id',
    component: AhForumDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
