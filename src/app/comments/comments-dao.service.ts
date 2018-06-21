import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comment } from '../model/comment';
import { AppLookService } from '../services/app-lookup.service';

@Injectable()
export class CommentsDaoService {
  private baseUrl = '';
  constructor(private http: HttpClient,
    private lookupService: AppLookService) {
    this.baseUrl = this.lookupService.getBaseApiEndPoint();
  }

  public getAll(rootId: string) {
    // this.baseUrl = '/assets/comments.json';
    return this.http.get<Comment[]>(this.baseUrl + '/' + rootId + '/comments');
    // return this.http.get<Comment[]>(this.baseUrl);
  }
  public add(rootId: string, comment: Comment) {
    return this.http.post<Comment>(this.baseUrl + '/' + rootId + '/comments', comment);
  }

  public getAllReplies(rootId: string, commentId: string) {
    const url = `${this.baseUrl}/${rootId}/comments/${commentId}`;
    return this.http.get<Comment[]>(url);
  }
  public replyOnComment(rootId: string, commentId: string, comment: Comment) {
    const url = `${this.baseUrl}/${rootId}/comments/${commentId}`;
    return this.http.post<Comment>(url, comment);
  }
}
