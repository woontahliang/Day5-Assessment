import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AlbumItem } from '../app.component';

@Component({
  selector: 'app-lp-form',
  templateUrl: './lp-form.component.html',
  styleUrls: ['./lp-form.component.css']
})
export class LpFormComponent implements OnInit {

  @Output()
  itemFromForm = new EventEmitter<AlbumItem>();

  value = 5;

  constructor() { }

  ngOnInit() {
  }

  processForm(myForm: NgForm) {
    console.log('LpForm processForm: ', myForm.value);

    for (let i in myForm.value) {
      console.log('i = ', i, ', v = ', myForm.value[i]);
    }

    if (myForm.value.albumCoverImage == "") {
      myForm.value.albumCoverImage = "assets/unknown.png";
    }

    var toProcess: AlbumItem = { album_name: myForm.value.albumName, artist_name: myForm.value.artistName, album_rating: myForm.value.albumRating, image_url: myForm.value.albumCoverImage };
    console.log('LpForm toProcess: ', toProcess);
    this.itemFromForm.next(toProcess);
    myForm.reset();
  }
}
