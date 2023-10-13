import { TestBed } from '@angular/core/testing';

import { EnlargeCursorService } from './enlarge-cursor.service';

describe('EnlargeCursorService', () => {
  let service: EnlargeCursorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnlargeCursorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
