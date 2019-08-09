import {Component} from '@angular/core';
import {PicturesService} from '../pictures.service';

@Component({
  selector: 'app-photo-display',
  templateUrl: './pictures-gallery.component.html',
  styleUrls: ['./pictures-gallery.component.scss']
})
export class PicturesGalleryComponent {
  private selectPicture: string;
  private index: number;

  constructor(private picturesService: PicturesService) {
  }

  showLightBox(picture, i) {
    this.index = i;
    this.selectPicture = picture;
    this.picturesService.changeLightBoxState(true);
  }
}
