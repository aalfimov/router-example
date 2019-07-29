import {Component, OnInit} from '@angular/core';
import {PicturesService} from '../pictures.service';

@Component({
  selector: 'app-upload-picture',
  templateUrl: './upload-picture.component.html',
  styleUrls: ['./upload-picture.component.scss']
})
export class UploadPictureComponent implements OnInit {

  constructor(private picturesService: PicturesService) {
  }
  changeListener($event): void {
    this.readThis($event.target);
  }
  // https://developer.mozilla.org/ru/docs/Web/API/FileReader
  // https://ru.wikipedia.org/wiki/Base64
  // ToDo download pictures and conver them to base64

  readThis(inputValue: any): void {
    const file: File = inputValue.files[0];
    const myReader: FileReader = new FileReader();
    const fileType = inputValue.parentElement.id;
    myReader.onloadend = (e) => {
      console.log(myReader.result);
    };

    myReader.readAsText(file);
  }

  ngOnInit() {
  }

  add(value: string) {
    if (value) {
      this.picturesService.add(value);
    }
  }
}
