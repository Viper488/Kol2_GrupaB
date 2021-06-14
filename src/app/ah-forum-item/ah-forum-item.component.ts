import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ah-forum-item',
  templateUrl: './ah-forum-item.component.html',
  styleUrls: ['./ah-forum-item.component.css']
})
export class AhForumItemComponent implements OnInit {

  @Input() id?: number = 0;
  @Input() image?: string = '';
  @Input() title?: string = '';
  @Input() text?: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
