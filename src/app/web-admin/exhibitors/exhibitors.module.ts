import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon'; 

import { ExhibitorsRoutingModule } from './exhibitors-routing.module';
import { ExhibitorsComponent } from './exhibitors.component';
import { InputMaterialModule } from 'src/app/commons/shared';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [ExhibitorsComponent],
  imports: [
    CommonModule,
    ExhibitorsRoutingModule,
    InputMaterialModule,
    MatIconModule,
    MatTableModule
    
  ]
})
export class ExhibitorsModule { }
