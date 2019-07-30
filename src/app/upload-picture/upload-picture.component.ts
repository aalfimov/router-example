import {Component} from '@angular/core';
import {PicturesService} from '../pictures.service';

@Component({
  selector: 'app-upload-picture',
  templateUrl: './upload-picture.component.html',
  styleUrls: ['./upload-picture.component.scss']
})
export class UploadPictureComponent {
  private base64textString: string;

  constructor(private picturesService: PicturesService) {
  }

  handleFileSelect(evt) {
    const file = evt.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = this.handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
      console.log();
    }
  }

  handleReaderLoaded(readerEvt) {
    const binaryString = readerEvt.target.result;
    this.base64textString = btoa(binaryString);
    this.add('data:image/jpg;base64,' + this.base64textString);
  }

  add(value: string) {
    if (value) {
      this.picturesService.add(value);
    }
  }
}
