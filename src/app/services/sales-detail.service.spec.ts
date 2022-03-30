import { TestBed } from '@angular/core/testing';

import { SalesDetailService } from './sales-detail.service';

describe('SalesDetailService', () => {
  let service: SalesDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalesDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
