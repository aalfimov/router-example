import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PicturesGalleryComponent} from './pictures-gallery/pictures-gallery.component';
import {UploadPictureComponent} from './upload-picture/upload-picture.component';
import {LightBoxComponent} from './light-box/light-box.component';
import {KeyboardListenerDirective} from './light-box/keyboard-listener.directive';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PicturesGalleryComponent,
    UploadPictureComponent,
    LightBoxComponent,
    KeyboardListenerDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
