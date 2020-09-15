import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav'; 
import { MatListModule } from '@angular/material/list';

import { PortalRoutingModule } from './portal-routing.module';
import { PortalComponent } from './portal.component';


@NgModule({
  declarations: [PortalComponent],
  imports: [
    CommonModule,
    PortalRoutingModule,
    MatSidenavModule,
    MatListModule
  ]
})
export class PortalModule { }
