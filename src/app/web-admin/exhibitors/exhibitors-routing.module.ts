import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExhibitorsComponent } from './exhibitors.component';

const routes: Routes = [
  {
    path: '',
    component: ExhibitorsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExhibitorsRoutingModule { }
