import { NotificationHelperService } from './../services/notificaiton-helper.service';
import { Comment } from './../model/comment';
import { CommentsDaoService } from './comments-dao.service';
import { Component, OnInit, Input } from '@angular/core';
import { NotificationType } from 'angular2component';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  @Input() rootId;
  comments: Comment[] = [];
  showAddComment = false;
  commentMessage = '';
  loading = true;
  constructor(private dao: CommentsDaoService,
    private notifyService: NotificationHelperService) { }

  ngOnInit() {
    this.getAllComments();
  }

  getAllComments() {
    this.dao.getAll(this.rootId).subscribe((comments) => {
      this.comments = comments;
    }, (error) => {
      this.notifyService.showMessage('unable to load comments', NotificationType.ERROR);
    });
  }

  setShowAddCommentPanelState(state: boolean) {
    this.showAddComment = state;
    this.commentMessage = '';
  }
  post() {
    if (this.commentMessage) {
      const comment: Comment = {
        message: btoa(this.commentMessage),
        author: 'User' + Math.floor(Math.random() * 1000)
      };
      this.dao.add(this.rootId, comment).subscribe((success) => {
        this.getAllComments();
        this.setShowAddCommentPanelState(false);
        this.notifyService.showMessage('Comment has been posted', NotificationType.SUCCESS);
      }, (error) => {
        this.notifyService.showMessage('Error occured while posting comment', NotificationType.ERROR);
      });

    }
  }
}
