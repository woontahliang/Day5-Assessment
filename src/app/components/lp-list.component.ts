import { Component, OnInit, Input } from '@angular/core';

export interface AlbumItem {
  album_name: string;
  artist_name: string;
  album_rating: number;
  image_url: string;
}

@Component({
  selector: 'app-lp-list',
  templateUrl: './lp-list.component.html',
  styleUrls: ['./lp-list.component.css']
})
export class LpListComponent implements OnInit {
  albumList: AlbumItem[] = [];

  _itemToList: AlbumItem;

  @Input() set itemToList(value: AlbumItem) {
    console.log("LpList Set itemToList called!");
    if (value != undefined) {
      this.processItem(value);
      this._itemToList = value;
    }
  }

  get itemToList(): AlbumItem {
    console.log("LpList Get itemToList called!");
    return this._itemToList;
  }

  constructor() { }

  ngOnInit() {
  }

  processItem(toProcess: AlbumItem, isAddToList = true) {
    console.log("LpList processItem called! isAddToList: " + isAddToList);
    if (isAddToList) {
      this.addItem(toProcess);
    }
  }

  addItem(toProcess: AlbumItem) {
    console.log("LpList addItem called! Album Name: " + toProcess.album_name + ", Artist Name: " + toProcess.artist_name + ", Album Rating: " + toProcess.album_rating + ", Image URL: " + toProcess.image_url);
    this.albumList.push(toProcess);
  }
}
