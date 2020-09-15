import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BranchAdminsComponent } from './branch-admins.component';

const routes: Routes = [
  {
    path: '',
    component: BranchAdminsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BranchAdminsRoutingModule { }
