import { Base64ToString } from './base64-to-string.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeConverterPipe } from './time-converter.pipe';
import { ModalModule, LoadingModule } from 'angular2component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ModalModule,
    LoadingModule,
    FormsModule
  ],
  declarations: [
    TimeConverterPipe,
    Base64ToString
  ],
  exports: [
    ModalModule,
    TimeConverterPipe,
    FormsModule,
    LoadingModule,
    Base64ToString
  ]
})
export class SharedModule { }
