import { Component, OnInit } from '@angular/core';

export interface Content {
    readonly id: number;
    author: string;
    imgUrl?: string;
    type?: string;
    title: string;
    body: string;
    tags?: string;
}

class ContentList {
    static contentCount = 0;
    private _items: Content[];
    constructor() {
        this._items = [];
    }
    get items(): Content[] {
        return this._items;
    }
    set items(i: Content[]) {
        this._items = i;
    }
    static increaseCount() {
        return ++ContentList.contentCount;
    }
    add(content: Content) {
        this._items.push(content);
    }
    count(i: number): number {
      return this._items.length;
    }
    toString(i: number): string {
      return `<div>${this._items[i].title}</div>
                <div>${this._items[i].id}</div>
                <div>${this._items[i].author}</div>
                <div>${this._items[i].imgUrl}</div>
                <div>${this._items[i].type}</div>
                <div>${this._items[i].body}</div>
                <div>${this._items[i].tags}</div>`;
    }
}

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css']
})
export class ContentCardComponent implements OnInit {
       title: string;
       title2: string;
       content: Content;
       content2: Content;
       cList: ContentList;
       cList2: ContentList;
  constructor() {
      this.title = '<strong>Angular!</strong>';
      this.content = {
          id: 1,
          author: 'Matt',
          imgUrl: 'https://angular.io/assets/images/logos/angular/angular.png',
          type: 'news',
          title: 'Angular',
          body: 'This is the body of the content',
          tags: '123'
      };
      this.cList = new ContentList();
      this.cList.add(this.content);

      this.title2 = '<strong>JavaScript!</strong>';
      this.content2 = {
          id: 2,
          author: 'Chris',
          imgUrl: 'https://angular.io/assets/images/logos/angular/angular.png',
          type: 'JSNews',
          title: 'JavaScript',
          body: 'This is the body of the content',
          tags: '1234'
      };
      this.cList2 = new ContentList();
      this.cList2.add(this.content);
  }

  ngOnInit() {
  }


}
