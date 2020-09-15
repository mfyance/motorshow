import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadBrochureRoutingModule } from './upload-brochure-routing.module';
import { UploadBrochureComponent } from './upload-brochure.component';
import { InputMaterialModule } from 'src/app/commons/shared';


@NgModule({
  declarations: [UploadBrochureComponent],
  imports: [
    CommonModule,
    UploadBrochureRoutingModule,
    InputMaterialModule
    
  ]
})
export class UploadBrochureModule { }
