import { TestBed } from '@angular/core/testing';

import { NgsAvaterService } from './ngs-avater.service';

describe('NgsAvaterService', () => {
  let service: NgsAvaterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgsAvaterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
