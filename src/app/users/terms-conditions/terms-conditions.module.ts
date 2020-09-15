import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TermsConditionsRoutingModule } from './terms-conditoins-routing.module';
import { TermsConditionsComponent } from './terms-conditions.component';
import { InputMaterialModule } from 'src/app/commons/shared';


@NgModule({
  declarations: [TermsConditionsComponent],
  imports: [
    CommonModule,
    TermsConditionsRoutingModule,
    InputMaterialModule
    
  ]
})
export class TermsConditionsModule { }
