import {Component, OnInit} from '@angular/core';
import {PicturesService} from '../pictures.service';

@Component({
  selector: 'app-upload-picture',
  templateUrl: './upload-picture.component.html',
  styleUrls: ['./upload-picture.component.scss']
})
export class UploadPictureComponent implements OnInit {
  private base64textString: string;

  constructor(private picturesService: PicturesService) {
  }

  handleFileSelect(evt) {
    const files = evt.target.files;
    const file = files[0];

    if (files && file) {
      const reader = new FileReader();

      reader.onload = this.handleReaderLoaded.bind(this);

      reader.readAsBinaryString(file);
    }
  }

  handleReaderLoaded(readerEvt) {
    console.log(readerEvt.target);
    const binaryString = readerEvt.target.result;
    this.base64textString = btoa(binaryString);
    this.add('data:image/jpg;base64,' + this.base64textString);
  }

  ngOnInit() {
  }

  add(value: string) {
    if (value) {
      this.picturesService.add(value);
    }
  }
}
