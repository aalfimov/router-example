import {Component, OnInit} from '@angular/core';
import {PicturesService} from '../pictures.service';
import {FormBuilder, FormControl, FormGroup, ValidationErrors} from '@angular/forms';

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

  ngOnInit(): void {
    this.initForm();
  }
  private initForm() {
    this.imageForm = this.fb.group({
      url: [''],
      file: ['']
    }, {validators: this.myCustomValidator});
  }
  // , this.requiredFileType('png')
  // requiredFileType( type: string ) {
  //   return (control: FormControl) => {
  //     const file = control.value;
  //     if ( file ) {
  //       const extension = file.name.split('.')[1].toLowerCase();
  //       if ( type.toLowerCase() !== extension.toLowerCase() ) {
  //         return {
  //           requiredFileType: true
  //         };
  //       }
  //       return null;
  //     }
  //     return null;
  //   };
  // }

  myCustomValidator(control: FormGroup): ValidationErrors | null {
    const url = control.get('url');
    const file = control.get('file');
    return (url.value.length || file.value.length) ? null :  {required : true};
  }
  setPreviewUrl(value: string) {
    this.imgURL = value;
  }
  handleFileSelect(event) {
    console.log('event' + event.target);
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
    this.imageForm.controls.file.setValue(this.imgURL ? this.imgURL : null);
  }

  add(event) {
    console.log(event);
    this.picturesService.add(this.imgURL);
  }
}
