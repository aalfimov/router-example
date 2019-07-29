import {Component, OnInit} from '@angular/core';
import {PicturesService} from '../pictures.service';

@Component({
  selector: 'app-photo-display',
  templateUrl: './pictures-gallery.component.html',
  styleUrls: ['./pictures-gallery.component.scss']
})
export class PicturesGalleryComponent implements OnInit {
  lightBox = false;
  selectPicture: any;

  constructor(private picturesService: PicturesService) {
  }

  ngOnInit() {
  }
  // example https://github.com/themyth92/angular2-lightbox/tree/master/src
  // https://github.com/crystalui/angular-lightbox/blob/master/src/app/app.component.ts
  // https://www.youtube.com/watch?v=6j5q-hP8sfk&t=369s

  // changeStyle(picture) {
  //   // console.log('picture was clicked' + picture);
  //   return `<img src="{{picture}}" alt="picture" class="lightbox">`;
  // }
  showLightBox(picture) {
    this.selectPicture = picture;
    this.lightBox = true;
  }
}
