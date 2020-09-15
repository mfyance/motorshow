import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ValidateConfigComponent } from './validate-config.component';

const routes: Routes = [
  {
    path: '',
    component: ValidateConfigComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ValidateConfigRoutingModule { }
