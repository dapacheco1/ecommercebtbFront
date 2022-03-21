import { TestBed } from '@angular/core/testing';

import { PersonServicesService } from './person-services.service';

describe('PersonServicesService', () => {
  let service: PersonServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
