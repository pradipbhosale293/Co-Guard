import { TestBed } from '@angular/core/testing';

import { CoGuardService } from './co-guard.service';

describe('CoGuardService', () => {
  let service: CoGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
