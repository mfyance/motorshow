import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuditoriumTalkRoutingModule } from './auditorium-talk-routing.module';
import { AuditoriumTalkComponent } from './auditorium-talk.component';
import { InputMaterialModule } from 'src/app/commons/shared';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [AuditoriumTalkComponent],
  imports: [
    CommonModule,
    AuditoriumTalkRoutingModule,
    InputMaterialModule,
    MatIconModule,
    MatTableModule
    
  ]
})
export class AuditoriumTalkModule { }
