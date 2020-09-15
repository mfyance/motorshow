import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StandsComponent } from './stands.component';

const routes: Routes = [
  {
    path: '',
    component: StandsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StandsRoutingModule { }
