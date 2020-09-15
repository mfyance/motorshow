import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BranchAdminRoutingModule } from './branch-admin-routing.module';
import { BranchAdminComponent } from './branch-admin.component';


@NgModule({
  declarations: [BranchAdminComponent],
  imports: [
    CommonModule,
    BranchAdminRoutingModule
  ]
})
export class BranchAdminModule { }
