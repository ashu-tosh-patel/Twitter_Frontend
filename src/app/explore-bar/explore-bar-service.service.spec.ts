import { TestBed } from '@angular/core/testing';

import { ExploreBarServiceService } from './explore-bar-service.service';

describe('ExploreBarServiceService', () => {
  let service: ExploreBarServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExploreBarServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
