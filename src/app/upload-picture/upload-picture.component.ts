import {Component, OnInit} from '@angular/core';
import {PicturesService} from '../pictures.service';
import {FormBuilder, FormGroup, ValidationErrors, Validators} from '@angular/forms';

@Component({
  selector: 'app-upload-picture',
  templateUrl: './upload-picture.component.html',
  styleUrls: ['./upload-picture.component.scss']
})
export class UploadPictureComponent implements OnInit {

  constructor(private picturesService: PicturesService, private fb: FormBuilder) {
  }

  private imgURL: string;
  private imageForm: FormGroup;

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.imageForm = this.fb.group({
      url: ['', this.urlCustomValidator],
      file: ['']
    }, {validators: this.myCustomValidator});
  }

  urlCustomValidator(control: FormGroup): ValidationErrors | null {
    const url = control.value.match(/(http(s?):)([/|.|\w|\s|-])*\.(?:jp(e?)g|gif|png)/) != null;
    return (url) ? null : {required: true};
  }
  //
  // fileCustomValidator(control: FormGroup): ValidationErrors | null {
  //     console.log(control.value);
  //   const file = control.get('file').value.match(/(?:jp(e?)g|gif|png)/) != null;
  //   return (file) ? null : {required: true};
  // }

  myCustomValidator(control: FormGroup): ValidationErrors | null {
    const url = control.value.url != null; // .match(/(http(s?):)([/|.|\w|\s|-])*\.(?:jp(e?)g|gif|png)/) != null;
    const file = control.value.file.match(/(?:jp(e?)g|gif|png)/) != null;
    return (url || file) ? null : {required: true};
  }

  handleFileSelect(event) {
    this.imageForm.value.url = '';
    const file = event.target.files[0];
    if (file.type.match(/image\/*/) != null) {
      const reader = new FileReader();
      reader.onload = this.handleReaderLoaded.bind(this);
      reader.readAsDataURL(file);
    }
  }

  handleReaderLoaded(readerEvent) {
    this.imgURL = readerEvent.target.result;
    this.imageForm.value.file = readerEvent.target.result;
  }

  // add() {
  //   this.picturesService.add(this.imgURL);
  //   // if (this.imageForm.value.url) {
  //   //   this.picturesService.add(this.imageForm.value.url);
  //   // }
  //   // if (this.imageForm.value.file) {
  //   //   this.picturesService.add(this.imgURL);
  //   // }
  // }

  clearFileInput() {
    this.imgURL = '';
    this.imageForm.value.file = '';
    if (this.imageForm.valid && this.imageForm.controls.url.valid) {
      this.imgURL = this.imageForm.value.url;
    }
  }
}
