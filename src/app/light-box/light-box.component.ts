import {Component, Input, OnInit} from '@angular/core';
import {PicturesGalleryComponent} from '../pictures-gallery/pictures-gallery.component';

@Component({
  selector: 'app-light-box',
  templateUrl: './light-box.component.html',
  styleUrls: ['./light-box.component.scss']
})
export class LightBoxComponent implements OnInit {
  @Input() selectPicture: string;

  constructor(private picturesGalleryComponent: PicturesGalleryComponent) {
  }

  ngOnInit() {
  }

  closeLightBox() {
    this.picturesGalleryComponent.lightBox = false;
  }
}
