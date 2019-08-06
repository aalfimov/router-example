import {Component, OnInit} from '@angular/core';
import {PicturesService} from '../pictures.service';
import {FormBuilder, FormGroup} from '@angular/forms';

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
      url: ['', this.urlValidator],
      file: ['', this.fileValidator]
    }, {validators: this.myCheckValidator});
  }

  urlValidator(control: FormGroup) {
    const url = control.value.match(/(http(s?):)([/|.|\w|\s|-])*\.(?:jp(e?)g|gif|png)/) != null;
    return (url) ? null : {required: true};
  }

  fileValidator(control: FormGroup) {
    const file = control.value.match(/(?:jp(e?)g|gif|png)/) != null;
    return (file) ? null : {required: true} ;
  }

  myCheckValidator(control: FormGroup) {
    const url = control.value.url != null;
    const file = control.value.file != null;
    return (url || file) ? null : {required: true};
  }

  handleFileSelect(event) {
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

  clearFileInput() {
    if (this.imageForm.controls.url.valid) {
      this.imgURL = this.imageForm.value.url;
    }
  }

  add() {
    this.picturesService.add(this.imgURL);
  }

  clearInput(urlInput: HTMLInputElement) {
    urlInput.value = '';
  }
}
