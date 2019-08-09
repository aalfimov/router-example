import {Directive, HostListener} from '@angular/core';
import {LightBoxComponent} from './light-box.component';

@Directive({
  selector: '[appKeyboardListener]'
})
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

