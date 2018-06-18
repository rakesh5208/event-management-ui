import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comment } from '../model/comment';
import { AppLookService } from '../services/app-lookup.service';

@Injectable()
export class CommentsDaoService {
  private baseUrl = '';
  constructor(private http: HttpClient,
    private lookupService: AppLookService) {
    // this.baseUrl = this.lookupService.getBaseApiEndPoint() + '/comments';
  }

  public getAll(rootId: string) {
    this.baseUrl = '/assets/comments.json';
    // return this.http.get<Comment[]>(this.baseUrl + '/' + rootId);
    return this.http.get<Comment[]>(this.baseUrl);
  }
  public add(rootId: string, comment: Comment) {
    return this.http.post<Comment>(this.baseUrl + '/' + rootId, comment);
  }
}