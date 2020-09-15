import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuditoriumTalkComponent } from './auditorium-talk.component';

const routes: Routes = [
  {
    path: '',
    component: AuditoriumTalkComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuditoriumTalkRoutingModule { }
