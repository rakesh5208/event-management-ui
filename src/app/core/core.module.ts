import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLookService, 
  DateUtil,
  NotificationHelperService } from '../services'
import {
  NavModule,
  PageBodyModule,
  FooterModule,
  NotificationModule
} from 'angular2component';

@NgModule({
  imports: [
    CommonModule,
    NavModule,
    PageBodyModule,
    FooterModule,
    NotificationModule
  ],
  declarations: [],
  exports: [
    NavModule,
    PageBodyModule,
    FooterModule,
    NotificationModule
  ],
  providers: [
    AppLookService, 
    DateUtil,
    NotificationHelperService
  ]
})
export class CoreModule { }
