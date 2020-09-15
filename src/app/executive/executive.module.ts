import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExecutiveRoutingModule } from './executive-routing.module';
import { ExecutiveComponent } from './executive.component';


@NgModule({
  declarations: [ExecutiveComponent],
  imports: [
    CommonModule,
    ExecutiveRoutingModule
  ]
})
export class ExecutiveModule { }
