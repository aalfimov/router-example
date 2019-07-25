import {Component, OnInit} from '@angular/core';
import {PicturesService} from '../pictures.service';

@Component({
  selector: 'app-photo-display',
  templateUrl: './pictures-gallery.component.html',
  styleUrls: ['./pictures-gallery.component.scss']
})
export class PicturesGalleryComponent implements OnInit {

  constructor(private picturesService: PicturesService) {
  }

  ngOnInit() {
  }

  changeStyle(picture) {
    // console.log('picture was clicked' + picture);
    return `<img src="{{picture}}" alt="picture" class="lightbox">`;
  }
}
