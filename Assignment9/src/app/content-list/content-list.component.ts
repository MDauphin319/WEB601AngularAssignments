import { Component, OnInit } from '@angular/core';
import {Content} from '../content-card/content-card-helper';
import {ContentServiceService} from '../content-service.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  bandList: Content[];
  constructor(private contentService: ContentServiceService) {
    this.bandList = [];
  }

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
  addContent(newBandFromChild: Content) {
    this.contentService.addContent(newBandFromChild)
      .subscribe(c => {
        this.bandList.push(c);
        const myClonedArray  = Object.assign([], this.bandList);
        this.bandList = myClonedArray;
      });
  }
  updateContent(updatedBandFromChild: Content) {
    this.contentService.updateContent(updatedBandFromChild)
      .subscribe(() => {
        const itemToUpdate = this.bandList.find(c => c.id === updatedBandFromChild.id)
        const itemToUpdateId = this.bandList.indexOf(itemToUpdate);
        this.bandList[itemToUpdateId] = updatedBandFromChild;
        const myClonedArray  = Object.assign([], this.bandList);
        this.bandList = myClonedArray;
        console.log('Content updated')
      });
  }
}
