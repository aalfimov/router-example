import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PicturesDisplayComponent } from './photo-display/pictures-display.component';
import { UploadPictureComponent } from './upload-picture/upload-picture.component';

@NgModule({
  declarations: [
    AppComponent,
    PicturesDisplayComponent,
    UploadPictureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
