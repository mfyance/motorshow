import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupportRoutingModule } from './support-routing.module';
import { SupportComponent } from './support.component';
import { InputMaterialModule } from 'src/app/commons/shared';

import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [SupportComponent],
  imports: [
    CommonModule,
    SupportRoutingModule,
    InputMaterialModule,
    MatIconModule,
    
    
  ]
})
export class SupportModule { }
