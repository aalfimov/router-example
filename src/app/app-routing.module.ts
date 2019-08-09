import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PicturesGalleryComponent} from './pictures-gallery/pictures-gallery.component';
import {UploadPictureComponent} from './upload-picture/upload-picture.component';
import {LightBoxComponent} from './light-box/light-box.component';

const routes: Routes = [
  {path: 'gallery', component: PicturesGalleryComponent},
  {path: 'image/:url', component: LightBoxComponent},
  {path: 'upload', component: UploadPictureComponent},
  // {path: '', redirectTo: '/gallery', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
