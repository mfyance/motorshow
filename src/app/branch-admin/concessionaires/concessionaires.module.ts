import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConcessionairesRoutingModule } from './concessionaires-routing.module';
import { ConcessionairesComponent } from './concessionaires.component';
import { InputMaterialModule } from 'src/app/commons/shared';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [ConcessionairesComponent],
  imports: [
    CommonModule,
    ConcessionairesRoutingModule,
    InputMaterialModule,
    MatIconModule,
    MatTableModule
    
  ]
})
export class ConcessionairesModule { }
