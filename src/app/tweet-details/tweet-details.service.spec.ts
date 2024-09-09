import { TestBed } from '@angular/core/testing';

import { TweetDetailsService } from './tweet-details.service';

describe('TweetDetailsService', () => {
  let service: TweetDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TweetDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
