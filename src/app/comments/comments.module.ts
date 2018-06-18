import { CommentsDaoService } from './comments-dao.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsComponent } from './comments.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [CommentsComponent],
  exports: [CommentsComponent],
  providers: [CommentsDaoService]
})
export class CommentsModule { }
