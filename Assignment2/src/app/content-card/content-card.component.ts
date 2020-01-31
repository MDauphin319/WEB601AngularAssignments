import {Component, Input, OnInit} from '@angular/core';
import {Content} from './content-card-helper';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css']
})
export class ContentCardComponent implements OnInit {
  @Input() band: Content;
  constructor() { }

  ngOnInit() {
  }
  displayId(): void {
    console.log('Current id is: ', this.band.id);
  }
}
