import { Component, OnInit } from '@angular/core';
import {AHDataService} from "../services/ah-data.service";

@Component({
  selector: 'ah-forum',
  templateUrl: './ah-forum.component.html',
  styleUrls: ['./ah-forum.component.css']
})
export class AhForumComponent implements OnInit {

  items$: any;

  constructor(private service: AHDataService) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll(){
    this.service.getAll().subscribe(response => {
      this.items$ = response;
    })
  }

}
