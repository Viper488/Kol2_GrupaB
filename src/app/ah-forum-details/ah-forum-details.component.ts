import { Component, OnInit } from '@angular/core';
import {AHDataService} from "../services/ah-data.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'ah-forum-details',
  templateUrl: './ah-forum-details.component.html',
  styleUrls: ['./ah-forum-details.component.css']
})
export class AhForumDetailsComponent implements OnInit {

  image:string = '';
  title:string = '';
  text:string = '';
  id:number = 0;


  constructor(private service: AHDataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id: string | null;
    this.route.paramMap.subscribe(params => {
      id = params.get('id');
      this.getDetails(id);
    });
  }

  getDetails(id: string | null) {
    this.service.getById(id).subscribe((res: any) => {
      this.id = res['id']
      this.image = res['image'];
      this.title = res['title'];
      this.text = res['text'];
    });
  }


}
