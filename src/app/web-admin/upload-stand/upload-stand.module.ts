import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadStandRoutingModule } from './upload-stand-routing.module';
import { UploadStandComponent } from './upload-stant.component';
import { InputMaterialModule } from 'src/app/commons/shared';


@NgModule({
  declarations: [UploadStandComponent],
  imports: [
    CommonModule,
    UploadStandRoutingModule,
    InputMaterialModule
    
  ]
})
export class UploadStandModule { }
