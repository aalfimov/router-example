import {Component} from '@angular/core';
import {PicturesService} from '../pictures.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-upload-picture',
  templateUrl: './upload-picture.component.html',
  styleUrls: ['./upload-picture.component.scss']
})
export class UploadPictureComponent {

  constructor(private picturesService: PicturesService) {
  }
  name = new FormControl('');
  imgURL: any;

  // preview(files, file) {
  //   console.log(file);
  //   console.log(files);
  //   if (files.length === 0) {
  //     return;
  //   }
  //   if (files[0].type.match(/image\/*/) == null) {
  //     // this.message = 'Only images are supported.';
  //     return;
  //   }
  //
  //   const reader = new FileReader();
  //   this.imagePath = files;
  //   reader.readAsDataURL(files[0]);
  //   reader.onload = () => {
  //     this.imgURL = reader.result;
  //   };
  // }

  handleFileSelect(event) {
    this.imgURL = '';
    const file = event.target.files[0];
    if (file.type.match(/image\/*/) != null) {
      const reader = new FileReader();
      reader.onload = this.handleReaderLoaded.bind(this);
      reader.readAsDataURL(file);
    }
  }

  handleReaderLoaded(readerEvent) {
    this.imgURL = readerEvent.target.result;
  }

  add(value: string) {
    if (value) {
      this.picturesService.add(value);
    }
  }

  setPreviewUrl(value: string) {
    this.imgURL = value;
  }
}
