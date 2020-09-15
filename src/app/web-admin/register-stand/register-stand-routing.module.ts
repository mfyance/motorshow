import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterStandComponent } from './register-stand.component';

const routes: Routes = [
  {
    path: '',
    component: RegisterStandComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterStandRoutingModule { }
