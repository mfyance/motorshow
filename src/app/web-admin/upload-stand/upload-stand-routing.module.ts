import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UploadStandComponent } from './upload-stant.component';

const routes: Routes = [
  {
    path: '',
    component: UploadStandComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UploadStandRoutingModule { }
