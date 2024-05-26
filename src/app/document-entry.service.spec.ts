import { TestBed } from '@angular/core/testing';

import { DocumentEntryService } from './document-entry.service';

describe('DocumentEntryService', () => {
  let service: DocumentEntryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocumentEntryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
