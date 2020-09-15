import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UploadImagesComponent } from './upload-images.component';

const routes: Routes = [
  {
    path: '',
    component: UploadImagesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UploadImagesRoutingModule { }
