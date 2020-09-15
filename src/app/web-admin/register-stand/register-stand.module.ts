import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{MatIconModule} from '@angular/material/icon'

import { RegisterStandRoutingModule } from './register-stand-routing.module';
import { RegisterStandComponent } from './register-stand.component';
import { InputMaterialModule } from 'src/app/commons/shared';


@NgModule({
  declarations: [RegisterStandComponent],
  imports: [
    CommonModule,
    RegisterStandRoutingModule,
    InputMaterialModule,
    MatIconModule
    
  ]
})
export class RegisterStandModule { }
