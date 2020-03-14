import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Content} from '../content-card/content-card-helper';
import {MessagesService} from "../messages.service";

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.css']
})
export class CreateContentComponent implements OnInit {
  @Output() addContentEvent = new EventEmitter<Content>();
  @Output() updateContentEvent = new EventEmitter<Content>();
  @Input() title: string;
  @Input() author: string;
  @Input() body: string;
  @Input() type: string;
  @Input() tag: string;
  @Input() imgUrl: string;
  currentId: number;
  newBandContent: Content;
  errorMessage: string;

  constructor(private messageService: MessagesService) { }

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
      console.log(successMessage);
      this.title = '';
      this.author = '';
      this.body = '';
      this.type = '';
      this.imgUrl = '';
      this.tag = '';
      this.errorMessage = '';
      this.messageService.add('Content has been successfully added!');
    })
      .catch(failMessage => {
        this.errorMessage = 'Content failed to be added! ' + failMessage;
      });
  }

  updateContent(id: string, title: string, author: string, body: string, type: string, imgUrl: string, tags: string): void {
    this.newBandContent = {
      id: Number.parseInt(id),
      title,
      author,
      body,
      type,
      imgUrl,
      tags: [tags]
    };
    this.updateContentEvent.emit(this.newBandContent);
  }
}
