import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FavoriteStandsComponent } from './favorite-stands.component';

const routes: Routes = [
  {
    path: '',
    component: FavoriteStandsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavoriteStandsRoutingModule { }
