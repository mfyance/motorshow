import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';

import { ExpositionAdminRoutingModule } from './exposition-admin-routing.module';
import { ExpositionAdminComponent } from './exposition-admin.component';


@NgModule({
  declarations: [ExpositionAdminComponent],
  imports: [
    CommonModule,
    ExpositionAdminRoutingModule,
    MatTableModule
  ]
})
export class ExpositionAdminModule { }
