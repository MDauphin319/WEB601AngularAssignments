import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Content} from '../content-card/content-card-helper';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.css']
})
export class CreateContentComponent implements OnInit {
  @Output() addContentEvent = new EventEmitter<Content>();
  title: string;
  author: string;
  body: string;
  type: string;
  tag: string;
  imgUrl: string;
  currentId: number;
  errorMessage: string;

  constructor() { }

  ngOnInit() {
    this.currentId = 10;
  }
  addContent() {
    return new Promise((success, fail) => {
      if (!this.body || !this.title || !this.author) {
        fail('Need the body, title and author to proceed!');
        return;
      }
      const newContent = {
        id: this.currentId++,
        title: this.title,
        author: this.author,
        body: this.body,
        type: this.type,
        imgUrl: this.imgUrl,
        tags: [this.tag]
      };
      this.addContentEvent.emit(newContent);
      success('Content successfully added! Title: ' + newContent.title);
    }).then(successMessage => {
      console.log(successMessage)
      this.title = '';
      this.author = '';
      this.body = '';
      this.type = '';
      this.imgUrl = '';
      this.tag = '';
      this.errorMessage = '';
    })
      .catch(failMessage => {
        this.errorMessage = 'Content failed to be added! ' + failMessage;
      });
  }

}
