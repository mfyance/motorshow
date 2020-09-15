import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConcessionairesComponent } from './concessionaires.component';

const routes: Routes = [
  {
    path: '',
    component: ConcessionairesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConcessionairesRoutingModule { }
