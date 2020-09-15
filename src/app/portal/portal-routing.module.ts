import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortalComponent } from './portal.component';

const routes: Routes = [
  {
    path: '',
    component: PortalComponent,
    children: [
      {
        path: 'web',
        loadChildren: () => import('../web-admin/web-admin.module').then(m => m.WebAdminModule)
      },
      {
        path: 'exposition',
        loadChildren: () => import('../exposition-admin/exposition-admin.module').then(m => m.ExpositionAdminModule)
      },
      {
        path: 'branch',
        loadChildren: () => import('../branch-admin/branch-admin.module').then(m => m.BranchAdminModule)
      },
      {
        path: 'executive',
        loadChildren: () => import('../executive/executive.module').then(m => m.ExecutiveModule)
      },
      {
        path: 'users',
        loadChildren: () => import('../users/users.module').then(m => m.UsersModule)
      }
    ]
  }
  
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalRoutingModule { }
