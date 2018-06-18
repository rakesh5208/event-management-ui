import { TestBed, inject } from '@angular/core/testing';

import { CommentsDaoService } from './comments-dao.service';

describe('CommentsDaoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommentsDaoService]
    });
  });

  it('should be created', inject([CommentsDaoService], (service: CommentsDaoService) => {
    expect(service).toBeTruthy();
  }));
});
