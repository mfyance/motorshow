import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ValidateConfigRoutingModule } from './validate-config-routing.module';
import { ValidateConfigComponent } from './validate-config.component';
import { InputMaterialModule } from 'src/app/commons/shared';


@NgModule({
  declarations: [ValidateConfigComponent],
  imports: [
    CommonModule,
    ValidateConfigRoutingModule,
    InputMaterialModule
    
  ]
})
export class ValidateConfigModule { }
