import {Component, Directive, ElementRef, HostListener, Input, OnChanges, OnInit} from '@angular/core';
import {PicturesGalleryComponent} from '../pictures-gallery/pictures-gallery.component';
import {PicturesService} from '../pictures.service';

@Component({
  selector: 'app-light-box',
  templateUrl: './light-box.component.html',
  styleUrls: ['./light-box.component.scss']
})
export class LightBoxComponent implements OnChanges {
  selectPicture: string;
  @Input() index: number;

  constructor(private picturesGalleryComponent: PicturesGalleryComponent, private picturesService: PicturesService) {
  }

  ngOnChanges() {
    this.selectPicture = this.picturesService.picturesArray[this.index];
  }

  closeLightBox() {
    this.picturesGalleryComponent.lightBox = false;
  }

  leftPicture() {
    if (this.index > 0) {
      this.index = this.index - 1;
      this.selectPicture = this.picturesService.picturesArray[this.index];
    }
  }

  rightPicture() {
    if (this.index < this.picturesService.picturesArray.length - 1) {
      this.index = this.index + 1;
      this.selectPicture = this.picturesService.picturesArray[this.index];
    }
  }
}
@Directive({selector: '[appKeyboardListener]'})
export class KeyboardListenerDirective {

  constructor(private lightBoxComponent: LightBoxComponent) {
  }

  @HostListener('window:keyup', ['$event'])
  keyEventArrow(event: KeyboardEvent) {
    switch (event.code) {
      case 'Escape':
        this.lightBoxComponent.closeLightBox();
        break;
      case 'ArrowLeft':
        this.lightBoxComponent.leftPicture();
        break;
      case 'ArrowRight':
        this.lightBoxComponent.rightPicture();
        break;
    }
  }
}
