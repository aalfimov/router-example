import {Component, Input, OnChanges} from '@angular/core';
import {PicturesGalleryComponent} from '../pictures-gallery/pictures-gallery.component';
import {PicturesService} from '../pictures.service';

@Component({
  selector: 'app-light-box',
  templateUrl: './light-box.component.html',
  styleUrls: ['./light-box.component.scss']
})
export class LightBoxComponent implements OnChanges {
  private selectPicture: string;
  @Input() index: number;

  constructor(private picturesService: PicturesService) {
  }

  ngOnChanges() {
    this.selectPicture = this.picturesService.getPictureByIndex(this.index);
  }

  closeLightBox() {
    this.picturesService.changeLightBoxState(false);
  }

  leftPicture() {
    if (this.index > 0) {
      this.index = this.index - 1;
      this.selectPicture = this.picturesService.getPictureByIndex(this.index);
    }
  }

  rightPicture() {
    if (this.index < this.picturesService.getPictureArray().length - 1) {
      this.index = this.index + 1;
      this.selectPicture = this.picturesService.getPictureByIndex(this.index);
    }
  }
}

