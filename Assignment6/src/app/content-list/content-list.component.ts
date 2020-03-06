import { Component, OnInit } from '@angular/core';
import {Content} from '../content-card/content-card-helper';
import {ContentServiceService} from '../content-service.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {
  bandList: Content[];
  constructor(private contentService: ContentServiceService) { }

  ngOnInit() {
    this.contentService.getContent().subscribe(bandList => this.bandList = bandList);
  }

  CheckTitle(title: string) {
    let isExist: boolean = false;
    for (const i of this.bandList) {
      if (i.title === title) {
        isExist = true;
      }
    }
    if (isExist) {
      confirm('Found');
    } else {
      confirm('Not Found');
    }
  }
  addContent(band: Content): void {
  this.bandList.push(band);
  const clonedBandList  = Object.assign([], this.bandList);
  this.bandList = clonedBandList;
  }
}
