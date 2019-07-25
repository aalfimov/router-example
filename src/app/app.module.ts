import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PicturesGalleryComponent} from './pictures-gallery/pictures-gallery.component';
import {UploadPictureComponent} from './upload-picture/upload-picture.component';
import { LightBoxComponent } from './light-box/light-box.component';

@NgModule({
  declarations: [
    AppComponent,
    PicturesGalleryComponent,
    UploadPictureComponent,
    LightBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
