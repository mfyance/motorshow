import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BranchAdminComponent } from './branch-admin.component';

const routes: Routes = [
  {
    path: '',
    component: BranchAdminComponent,
    children: [
      {
        path: 'reset-password',
        loadChildren: () => import('./reset-password/reset-password.module').then(m => m.ResetPasswordModule)
      },
      {
        path: 'concessionaires',
        loadChildren: () => import('./concessionaires/concessionaires.module').then(m => m.ConcessionairesModule)
      },
      {
        path: 'upload-brochure',
        loadChildren: () => import('./upload-brochure/upload-brochure.module').then(m => m.UploadBrochureModule)
      }
      ,
      {
        path: 'upload-images',
        loadChildren: () => import('./upload-images/upload-images.module').then(m => m.UploadImagesModule)
      }
      ,
      {
        path: 'download-brochure',
        loadChildren: () => import('./download-brochure/download-brochure.module').then(m => m.DownloadBrochureModule)
      }
    ]
  }
  
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BranchAdminRoutingModule { }
