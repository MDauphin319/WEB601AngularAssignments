import { Injectable } from '@angular/core';
import {bandList} from './contentDb';
import {Content} from './content-card/content-card-helper';
import {MessagesService} from './messages.service';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentServiceService {

  constructor(private messageService: MessagesService) { }

    getContent(): Observable<Content[]> {
      this.messageService.add('Content retrieved!');
      return of (bandList);
    }
}
