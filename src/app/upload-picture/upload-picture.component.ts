import {Component, OnInit} from '@angular/core';
import {PicturesService} from '../pictures.service';
import {FormBuilder, FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';

@Component({
  selector: 'app-upload-picture',
  templateUrl: './upload-picture.component.html',
  styleUrls: ['./upload-picture.component.scss']
})
export class UploadPictureComponent implements OnInit {

  constructor(private picturesService: PicturesService, private fb: FormBuilder) {
  }
  imgURL: string;
  public imageForm: FormGroup;
  buttonCheckValue = false;


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
    console.log(this.imageForm);
  }
  private initForm() {
    this.imageForm = this.fb.group({
      url: [''],
      file: ['']
    }, {validators: this.myCustomValidator});
  }
  private myCustomValidator(control: FormGroup): ValidationErrors | null {
    const url = control.get('url');
    const file = control.get('file');
    return (url.value.length || file.value.length) ? null :  {required : true};
  }

  // , this.customValidator.bind(this)
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
  // customValidator(control: FormControl): {[s: string]: boolean} {
  //     if (this.imageForm.value.url.length > 0 || this.imageForm.value.file.length > 0) {
  //         return {valid: true};
  //     }
  //     return null;
  // }
  handleReaderLoaded(readerEvent) {
    this.imgURL = readerEvent.target.result;
  }

  add() {
    this.picturesService.add(this.imgURL);
  }

  // checkForm(imageForm: FormGroup) {
  //   // this.buttonCheckValue = this.imageForm.value.url.length > 0 || this.imageForm.value.file.length > 0;
  //   this.buttonCheckValue = this.imageForm.value.url.length > 0 || this.imageForm.value.file.length > 0;
  // }
}
