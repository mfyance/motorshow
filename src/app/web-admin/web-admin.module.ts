import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebAdminRoutingModule } from './web-admin-routing.module';
import { WebAdminComponent } from './web-admin.component';
import { UploadStandModule } from './upload-stand/upload-stand.module';


@NgModule({
  declarations: [WebAdminComponent],
  imports: [
    CommonModule,
    WebAdminRoutingModule,
    UploadStandModule
  ]
})
export class WebAdminModule { }
