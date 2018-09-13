import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AlbumItem } from '../app.component';

export class myFormData {
  constructor(
    public albumName: string,
    public artistName: string,
    public albumRating: number,
    public albumCoverImage: string
  ) { }
}

@Component({
  selector: 'app-lp-form',
  templateUrl: './lp-form.component.html',
  styleUrls: ['./lp-form.component.css']
})
export class LpFormComponent implements OnInit {

  @Output()
  itemFromForm = new EventEmitter<AlbumItem>();

  myData = new myFormData("Power of Love", "Celine Dion", 5, "https://vignette.wikia.nocookie.net/myat40/images/9/92/Celine_Dion_The_Power_Of_Love_cover.jpg");

  constructor() { }

  ngOnInit() {
  }

  resetToDefaultForm(myForm: NgForm) {
    console.log('LpForm resetToDefaultForm: ', myForm.value);
    myForm.resetForm(new myFormData("Power of Love", "Celine Dion", 5, "https://vignette.wikia.nocookie.net/myat40/images/9/92/Celine_Dion_The_Power_Of_Love_cover.jpg"));
    return false;
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

    myForm.resetForm(new myFormData("Power of Love", "Celine Dion", 5, "https://vignette.wikia.nocookie.net/myat40/images/9/92/Celine_Dion_The_Power_Of_Love_cover.jpg"));

    /*
    myForm.reset();
    this.myData = new myFormData("Power of Love", "Celine Dion", 5, "http://example.com/power_of_love.png")
    */

    /*
    this.myData.albumName = "Power of Love";
    this.myData.artistName = "Celine Dion";
    this.myData.albumRating = 5;
    this.myData.albumCoverImage = "http://example.com/power_of_love.png";
    */
  }
}
