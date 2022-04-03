import { TestBed } from '@angular/core/testing';

import { DownloadPDFService } from './download-pdf.service';

describe('DownloadPDFService', () => {
  let service: DownloadPDFService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DownloadPDFService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
