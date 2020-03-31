import { Injectable } from '@angular/core';
import {bandList} from './contentDb';
import {Content} from './content-card/content-card-helper';
import {MessagesService} from './messages.service';
import {Observable, of} from 'rxjs';
import {HttpClient , HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContentServiceService {

  constructor(private http: HttpClient) { }

    // getContent(): Observable<Content[]> {
    //  this.messageService.add('Content retrieved!');
    //  return of (bandList);
    // }

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-type':
        'application/json' })
  };

  getContent(): Observable<Content[]> {
    return this.http.get<Content[]>('api/content');
  }

  addContent(content: Content): Observable<Content> {
    return this.http.post<Content>('api/content', content, this.httpOptions);
  }

  updateContent(content: Content): Observable<any> {
    return this.http.put('api/content', content, this.httpOptions);
  }

}
