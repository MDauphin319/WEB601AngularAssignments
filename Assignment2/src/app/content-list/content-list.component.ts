import { Component, OnInit } from "@angular/core";
import {Content} from '../content-card/content-card-helper';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {
  bandList: Content[];
  constructor() {
    this.bandList = [];
    this.bandList[0] = {
      id: 0,
      title: 'Green Day',
      author: 'Derek',
      body: "Green Day's big hit when they came back was American Idiot",
      type: 'Punk-rock',
      imgUrl: 'https://media.altpress.com/uploads/2019/09/green-day-ap-cover.jpg',
    };
    this.bandList[1] = {
      id: 1,
      title: 'Katy Perry',
      author: 'Jack',
      body: "Good thing she isn't married to Russell Brand anymore",
      type: 'Pop',
      imgUrl: 'https://i.pinimg.com/474x/fd/b7/bf/fdb7bf03d038de42649cf72af76a51bb--katy-perry-albums-cd-artwork.jpg',
    };
    this.bandList[2] = {
      id: 2,
      title: 'Metallica',
      author: 'Stephen',
      body: `They\'ve been making music since the beginning of time and it\'s great!`,
      type: 'Metal',
      imgUrl: 'https://www.revolvermag.com/sites/default/files/styles/original_image__844px_x_473px_/public/media/section-media/ridethelightning.jpg?itok=Fd0KtaS2&timestamp=1549044407',
      tags: ['classic', 'guitar hero']
    };
    this.bandList[3] = {
      id: 3,
      title: 'Wu Tang Clan',
      author: 'Jd',
      body: 'They were popular when I was in gradeschool',
      type: 'Hip-Hop',
      imgUrl: 'https://upload.wikimedia.org/wikipedia/en/5/53/Wu-TangClanEntertheWu-Tangalbumcover.jpg',
    };
    this.bandList[4] = {
      id: 4,
      title: 'Skrillex',
      author: 'Stephen',
      body: 'He used to be the lead singer of From First to Last',
      type: 'Dubstep',
      imgUrl: 'https://www.billboard.com/files/styles/1536x866/public/media/Skrillex-Scary-Monsters-Nice-Sprites-2019-billboard-1500.jpg',
      tags: ['guitar hero']
    };

  }

  ngOnInit() {
  }

}
