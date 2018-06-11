import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeConverterPipe } from './time-converter.pipe';
import { ModalModule } from 'angular2component';

@NgModule({
  imports: [
    CommonModule,
    ModalModule
  ],
  declarations: [TimeConverterPipe],
  exports: [ ModalModule,TimeConverterPipe]
})
export class SharedModule { }
