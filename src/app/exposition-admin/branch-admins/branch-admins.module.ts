import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BranchAdminsRoutingModule } from './branch-admins-routing.module';
import { BranchAdminsComponent } from './branch-admins.component';
import { InputMaterialModule } from 'src/app/commons/shared';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [BranchAdminsComponent],
  imports: [
    CommonModule,
    BranchAdminsRoutingModule,
    InputMaterialModule,
    MatIconModule,
    MatTableModule
    
  ]
})
export class BranchAdminsModule { }
