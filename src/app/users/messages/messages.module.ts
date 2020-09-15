import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{MatIconModule} from '@angular/material/icon'

import { MessagesRoutingModule } from './messages-routing.module';
import { MessagesComponent } from './messages.component';
import { InputMaterialModule } from 'src/app/commons/shared';


@NgModule({
  declarations: [MessagesComponent],
  imports: [
    CommonModule,
    MessagesRoutingModule,
    InputMaterialModule,
    MatIconModule
    
  ]
})
export class MessagesModule { }
