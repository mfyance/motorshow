import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContacRoutingModule } from './contac-routing.module';
import { ContacComponent } from './contac.component';
import { InputMaterialModule } from 'src/app/commons/shared';


@NgModule({
  declarations: [ContacComponent],
  imports: [
    CommonModule,
    ContacRoutingModule,
    InputMaterialModule
    
  ]
})
export class ContacModule { }
