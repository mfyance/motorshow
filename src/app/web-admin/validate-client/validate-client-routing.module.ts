import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ValidateClientComponent } from './validate-client.component';

const routes: Routes = [
  {
    path: '',
    component: ValidateClientComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ValidateClientRoutingModule { }
