import { Component } from '@angular/core';

export interface AlbumItem {
  album_name: string;
  artist_name: string;
  album_rating: number;
  image_url: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listItem: AlbumItem;

  addToList(item: AlbumItem) {
    console.log("App addToAlbum called! Album Name: " + item.album_name + ", Artist Name: " + item.artist_name + ", Album Rating: " + item.album_rating + ", Image URL: " + item.image_url);
    this.listItem = item;
  }
}
