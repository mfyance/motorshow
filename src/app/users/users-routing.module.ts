import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    children: [
      {
        path: 'contac',
        loadChildren: () => import('./contac/contac.module').then(m => m.ContacModule)
      },
      {
        path: 'download-brochure',
        loadChildren: () => import('./download-brochure/download-brochure.module').then(m => m.DownloadBrochureModule)
      },
      {
        path: 'favorite-stands',
        loadChildren: () => import('./favorite-stands/favorite-stands.module').then(m => m.FavoriteStandsModule)
      },
      {
        path: 'messages',
        loadChildren: () => import('./messages/messages.module').then(m => m.MessagesModule)
      },
      {
        path: 'privacy',
        loadChildren: ()=> import('./privacy/privacy.module').then(m=> m.PrivacyModule) 
      } ,
      {
        path: 'profile',
        loadChildren: ()=> import('./profile/profile.module').then(m=> m.ProfileModule)
      },
      {
        path: 'support',
        loadChildren: ()=> import('./support/support.module').then(m=> m.SupportModule)
      },
      {
        path: 'terms-conditions',
        loadChildren:()=> import('./terms-conditions/terms-conditions.module').then(m=>m.TermsConditionsModule)
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
