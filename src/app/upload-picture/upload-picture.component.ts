import {Component, OnInit} from '@angular/core';
import {PicturesService} from '../pictures.service';
import {FormBuilder, FormGroup, ValidationErrors} from '@angular/forms';

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

  myCustomValidator(control: FormGroup): ValidationErrors | null {
    const url = control. get('url').value.match(/(http(s?):)([/|.|\w|\s|-])*\.(?:jp(e?)g|gif|png)/) != null;
    const file = control.get('file').value.match(/(?:jp(e?)g|gif|png)/) != null;
    return ( url || file) ? null : {required: true};
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

  add() {
    if (this.imageForm.value.url) {
      this.picturesService.add(this.imageForm.value.url);
    } else {
      this.picturesService.add(this.imgURL);
    }
  }
}
