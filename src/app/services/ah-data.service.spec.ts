import { TestBed } from '@angular/core/testing';

import { AHDataService } from './ah-data.service';

describe('AHDataService', () => {
  let service: AHDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AHDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
