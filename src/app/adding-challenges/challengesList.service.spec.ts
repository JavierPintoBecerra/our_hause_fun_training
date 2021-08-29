import { TestBed } from '@angular/core/testing';

import { ChallengesListService } from './challengesList.service';

describe('ChallengesService', () => {
  let service: ChallengesListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChallengesListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
