import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExecutiveComponent } from './executive.component';

const routes: Routes = [
  {
    path: '',
    component: ExecutiveComponent,
    children: [
      {
        path: 'reset-password',
        loadChildren: () => import('./reset-password/reset-password.module').then(m => m.ResetPasswordModule)
      },
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
export class ExecutiveRoutingModule { }
