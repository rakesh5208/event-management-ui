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
  declarations: [TimeConverterPipe],
  exports: [
    ModalModule,
    TimeConverterPipe,
    FormsModule,
    LoadingModule
  ]
})
export class SharedModule { }
