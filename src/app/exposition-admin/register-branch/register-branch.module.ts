import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterBranchRoutingModule } from './register-branch-routing.module';
import { RegisterBranchComponent } from './register-branch.component';
import { InputMaterialModule } from 'src/app/commons/shared';


@NgModule({
  declarations: [RegisterBranchComponent],
  imports: [
    CommonModule,
    RegisterBranchRoutingModule,
    InputMaterialModule
    
  ]
})
export class RegisterBranchModule { }
