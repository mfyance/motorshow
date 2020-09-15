import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpositionConfigRoutingModule } from './exposition-config-routing.module';
import { ExpositionConfigComponent } from './exposition-config.component';
import { InputMaterialModule } from 'src/app/commons/shared';


@NgModule({
  declarations: [ExpositionConfigComponent],
  imports: [
    CommonModule,
    ExpositionConfigRoutingModule,
    InputMaterialModule
    
  ]
})
export class ExpositionConfigModule { }
