import { Component, OnInit } from '@angular/core';
import {ContentCardComponent} from '../content-card/content-card.component';
import {Content} from '../content-card/content-card-helper';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {
  content: Content[];
  constructor() {
      this.content = [{
          id: 1,
          author: 'Matt',
          imgUrl: 'https://Windstorm.com',
          type: 'serious',
          title: 'Video Games',
          body: 'Serious conversations about video games',
          tags: '1'
      }, {
          id: 2,
          author: 'Steve',
          imgUrl: 'https://Windstorm.com',
          type: 'Anything',
          title: 'Anything convo',
          body: 'conversations about anything',
          tags: '12'
      }, {
          id: 3,
          author: 'Chris',
          imgUrl: 'https://Windstorm.com',
          type: 'Angry',
          title: 'Rants',
          body: 'Conversation to rant on',
          tags: '123'
      }, {
          id: 4,
          author: 'Alex',
          imgUrl: 'https://Windstorm.com',
          type: 'Awesome',
          title: 'Everything Awesome',
          body: 'conversations about everything awesome',
          tags: '1234'
      }, {
          id: 5,
          author: 'Jerry',
          imgUrl: 'https://Windstorm.com',
          type: 'funny',
          title: 'jokes',
          body: 'conversations about jokes',
          tags: '12345'
      }];
  }

  ngOnInit() {
  }

}
