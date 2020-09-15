import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebAdminComponent } from './web-admin.component';

const routes: Routes = [
  {
    path: '',
    component: WebAdminComponent,
    children: [
      {
        path: 'exhibitors',
        loadChildren: () => import('./exhibitors/exhibitors.module').then(m => m.ExhibitorsModule)
      },
      {
        path: 'stands',
        loadChildren: () => import('./stands/stands.module').then(m => m.StandsModule)
      },
      {
        path: 'clients',
        loadChildren: () => import('./clients/clients.module').then(m => m.ClientsModule)
      },
      {
        path: 'reset-password',
        loadChildren: () => import('./reset-password/reset-password.module').then(m => m.ResetPasswordModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebAdminRoutingModule { }
