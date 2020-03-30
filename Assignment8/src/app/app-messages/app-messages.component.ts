import { Component, OnInit } from '@angular/core';
import {MessagesService} from '../messages.service';

@Component({
  selector: 'app-app-messages',
  templateUrl: './app-messages.component.html',
  styleUrls: ['./app-messages.component.scss']
})
export class AppMessagesComponent implements OnInit {

  constructor(public messageService: MessagesService) {

  }

  ngOnInit() {
  }

}
