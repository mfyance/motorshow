import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UploadBrochureComponent } from './upload-brochure.component';

const routes: Routes = [
  {
    path: '',
    component: UploadBrochureComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UploadBrochureRoutingModule { }
