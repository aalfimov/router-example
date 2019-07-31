import {Component, OnInit} from '@angular/core';
import {PicturesService} from '../pictures.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-upload-picture',
  templateUrl: './upload-picture.component.html',
  styleUrls: ['./upload-picture.component.scss']
})
export class UploadPictureComponent implements OnInit{

  constructor(private picturesService: PicturesService, private fb: FormBuilder) {
  }
  url = new FormControl('', Validators.required);
  imgURL: string;
  public imageForm: FormGroup;

  // preview(files, file) {
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
  ngOnInit(): void {
    this.initForm();
  }
  private initForm() {
    this.imageForm = this.fb.group({
      url: ['', Validators.required],
      file: ['', Validators.required]
    });
  }
  setPreviewUrl(value: string) {
    this.imgURL = value;
  }
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

    this.picturesService.add(value);
    // if (value) {
    //   this.picturesService.add(value);
    // }
  }

  checkForm(imageForm: FormGroup) {
    console.log(imageForm);
  }
}
