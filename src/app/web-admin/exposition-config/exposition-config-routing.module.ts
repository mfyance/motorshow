import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExpositionConfigComponent } from './exposition-config.component';

const routes: Routes = [
  {
    path: '',
    component: ExpositionConfigComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpositionConfigRoutingModule { }
