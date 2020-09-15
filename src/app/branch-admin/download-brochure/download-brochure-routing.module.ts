import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DownloadBrochureComponent } from './download-brochure.component';

const routes: Routes = [
  {
    path: '',
    component: DownloadBrochureComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DownloadBrochureRoutingModule { }
