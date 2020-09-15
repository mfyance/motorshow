import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SponsorsRoutingModule } from './sponsors-routing.module';
import { SponsorsComponent } from './sponsors.component';
import { InputMaterialModule } from 'src/app/commons/shared';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [SponsorsComponent],
  imports: [
    CommonModule,
    SponsorsRoutingModule,
    InputMaterialModule,
    MatIconModule,
    MatTableModule
    
  ]
})
export class SponsorsModule { }
