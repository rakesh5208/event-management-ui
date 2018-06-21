import { CommentsDaoService } from './comments-dao.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsComponent } from './comments.component';
import { SharedModule } from '../shared/shared.module';
import { ViewCommentComponent } from './view-comment/view-comment.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [CommentsComponent, ViewCommentComponent],
  exports: [CommentsComponent],
  providers: [CommentsDaoService]
})
export class CommentsModule { }
