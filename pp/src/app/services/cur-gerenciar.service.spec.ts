import { TestBed } from '@angular/core/testing';

import { CurGerenciarService } from './cur-gerenciar.service';

describe('CurGerenciarService', () => {
  let service: CurGerenciarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurGerenciarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
