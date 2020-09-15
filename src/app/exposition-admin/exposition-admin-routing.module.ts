import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExpositionAdminComponent } from './exposition-admin.component';

const routes: Routes = [
  {
    path: '',
    component: ExpositionAdminComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'sponsors',
        loadChildren: () => import('./sponsors/sponsors.module').then(m => m.SponsorsModule)
      },
      {
        path: 'auditorium-talk',
        loadChildren: () => import('./auditorium-talk/auditorium-talk.module').then(m => m.AuditoriumTalkModule)
      },
      {
        path: 'stands',
        loadChildren: () => import('./stands/stands.module').then(m => m.StandsModule)
      },
      {
        path: 'branch-admins',
        loadChildren: () => import('./branch-admins/branch-admins.module').then(m => m.BranchAdminsModule)
      },
      {
        path: 'reset-password',
        loadChildren: () => import('./reset-password/reset-password.module').then(m => m.ResetPasswordModule)
      },
      {
        path: 'download-brochure',
        loadChildren: () => import('./download-brochure/download-brochure.module').then(m => m.DownloadBrochureModule)
      },
      {
        path: 'validate-config',
        loadChildren: () => import('./validate-config/validate-config.module').then(m => m.ValidateConfigModule)
      } ,
      {
        path: 'notifications',
        loadChildren: () => import('./notifications/notifications.module').then(m => m.NotificationsModule)
      } ,
      {
        path: 'schedule',
        loadChildren: () => import('./schedule/schedule.module').then(m => m.ScheduleModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpositionAdminRoutingModule { }
