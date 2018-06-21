import { Component, OnInit, Input } from '@angular/core';
import { CommentsDaoService } from '../comments-dao.service';
import { NotificationHelperService } from '../../services';
import { Comment } from '../../model';
import { NotificationType } from 'angular2component';
@Component({
  selector: 'app-view-comment',
  templateUrl: './view-comment.component.html',
  styleUrls: ['./view-comment.component.css']
})
export class ViewCommentComponent implements OnInit {
  @Input() comment: Comment;
  @Input() rootId: string;
  comments: Comment[] = [];
  showAddComment = false;
  commentMessage = '';
  constructor(private dao: CommentsDaoService,
    private notifyService: NotificationHelperService) { }

  ngOnInit() {
    this.getAllReplies();
  }

  getAllReplies() {
    this.dao.getAllReplies(this.rootId, this.comment.id).subscribe((replies) => {
      this.comments = replies;
    }, (error) => {
      this.notifyService.showMessage('Unable to load replies', NotificationType.ERROR);
    });
  }
  setShowAddCommentPanelState(state: boolean) {
    this.showAddComment = state;
    this.commentMessage = '';
  }
  post() {
    if (this.commentMessage) {
      const replyComment: Comment = {
        message: btoa(this.commentMessage),
        author: 'User' + Math.floor(Math.random() * 1000)
      };
      this.dao.replyOnComment(this.rootId, this.comment.id, replyComment).subscribe((success) => {
        this.getAllReplies();
        this.setShowAddCommentPanelState(false);
      }, (error) => {
        this.notifyService.showMessage('Error occured while posting comment', NotificationType.ERROR);
      });

    }
  }
}
