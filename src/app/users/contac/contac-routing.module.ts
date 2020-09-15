import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContacComponent } from './contac.component';

const routes: Routes = [
  {
    path: '',
    component: ContacComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContacRoutingModule { }
