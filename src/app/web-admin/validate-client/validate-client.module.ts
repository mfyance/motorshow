import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ValidateClientRoutingModule } from './validate-client-routing.module';
import { ValidateClientComponent } from './validate-client.component';
import { InputMaterialModule } from 'src/app/commons/shared';


@NgModule({
  declarations: [ValidateClientComponent],
  imports: [
    CommonModule,
    ValidateClientRoutingModule,
    InputMaterialModule
    
  ]
})
export class ValidateClientModule { }
