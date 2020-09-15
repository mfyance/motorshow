import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon'; 

import { FavoriteStandsRoutingModule } from './favorite-stands-routing.module';
import { FavoriteStandsComponent } from './favorite-stands.component';
import { InputMaterialModule } from 'src/app/commons/shared';
import{MatCardModule}from '@angular/material/card';


@NgModule({
  declarations: [FavoriteStandsComponent],
  imports: [
    CommonModule,
    FavoriteStandsRoutingModule,
    InputMaterialModule,
    MatIconModule,
    MatCardModule
    
  ]
})
export class FavoriteStandsModule { }
