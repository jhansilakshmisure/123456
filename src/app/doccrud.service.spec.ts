import { TestBed } from '@angular/core/testing';

import { DoccrudService } from './doccrud.service';

describe('DoccrudService', () => {
  let service: DoccrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoccrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
