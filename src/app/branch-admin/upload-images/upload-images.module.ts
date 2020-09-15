import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadImagesRoutingModule } from './upload-images-routing.module';
import { UploadImagesComponent } from './upload-images.component';
import { InputMaterialModule } from 'src/app/commons/shared';


@NgModule({
  declarations: [UploadImagesComponent],
  imports: [
    CommonModule,
    UploadImagesRoutingModule,
    InputMaterialModule
    
  ]
})
export class UploadImagesModule { }
