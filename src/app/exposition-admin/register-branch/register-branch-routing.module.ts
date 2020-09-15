import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterBranchComponent } from './register-branch.component';

const routes: Routes = [
  {
    path: '',
    component: RegisterBranchComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterBranchRoutingModule { }
