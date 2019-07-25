import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PicturesDisplayComponent} from './photo-display/pictures-display.component';
import {UploadPictureComponent} from './upload-picture/upload-picture.component';

const routes: Routes = [
  {path: 'pictures', component: PicturesDisplayComponent},
  {path: 'upload', component: UploadPictureComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
