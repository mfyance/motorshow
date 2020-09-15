import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

import { DownloadBrochureRoutingModule } from './download-brochure-routing.module';
import { DownloadBrochureComponent } from './download-brochure.component';
import { InputMaterialModule } from 'src/app/commons/shared';


@NgModule({
  declarations: [DownloadBrochureComponent],
  imports: [
    CommonModule,
    DownloadBrochureRoutingModule,
    InputMaterialModule,
    MatCardModule
    
  ]
})
export class DownloadBrochureModule { }
