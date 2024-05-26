import { TestBed } from '@angular/core/testing';

import { KpiDataService } from './kpi-data.service';

describe('KpiDataService', () => {
  let service: KpiDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KpiDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
