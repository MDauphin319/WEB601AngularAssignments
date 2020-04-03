import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Content} from '../content-card/content-card-helper';
import {ContentServiceService} from '../content-service.service';

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.scss']
})
export class ContentDetailComponent implements OnInit {
  id: number;
  band: Content;
  constructor(private route: ActivatedRoute, private contentService: ContentServiceService) {
    this.band = {
      title: '',
      author: '',
      body: '',
      type: '',
      imgUrl: '',
      tags: []
    };
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = +params.get('id');
      this.contentService.getContentItem(this.id).subscribe(c => {
        this.band = c;
        console.log(this.band);
      });
    });
  }
}
