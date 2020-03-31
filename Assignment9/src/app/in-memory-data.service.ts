import { Injectable } from '@angular/core';
import { Content} from './content-card/content-card-helper';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import {bandList} from './contentDb';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  constructor() { }

  createDb() {
    const content = bandList;
    return {content};
  }

  genId(content: Content[]): number {
    return content.length > 0 ?
      Math.max(...content.map(c => c.id)) + 1
      : 2000;
  }
}

