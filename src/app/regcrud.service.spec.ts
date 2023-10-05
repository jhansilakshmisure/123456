import { TestBed } from '@angular/core/testing';

import { RegcrudService } from './regcrud.service';

describe('RegcrudService', () => {
  let service: RegcrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegcrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
