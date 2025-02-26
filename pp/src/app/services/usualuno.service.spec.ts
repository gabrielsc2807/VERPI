import { TestBed } from '@angular/core/testing';

import { UsualunoService } from './usualuno.service';

describe('UsualunoService', () => {
  let service: UsualunoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsualunoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
