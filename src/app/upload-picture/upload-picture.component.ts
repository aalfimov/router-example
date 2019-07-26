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

  ngOnInit() {
  }

  add(value: string) {
    if (value) {
      this.picturesService.add(value);
    }
  }
}
