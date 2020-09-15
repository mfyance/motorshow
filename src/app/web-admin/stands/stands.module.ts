import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StandsRoutingModule } from './stands-routing.module';
import { StandsComponent } from './stands.component';
import { InputMaterialModule } from 'src/app/commons/shared';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [StandsComponent],
  imports: [
    CommonModule,
    StandsRoutingModule,
    InputMaterialModule,
    MatIconModule,
    MatTableModule
    
  ]
})
export class StandsModule { }
