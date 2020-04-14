import { TestBed } from '@angular/core/testing';

import { PomocService } from './pomoc.service';

describe('PomocService', () => {
  let service: PomocService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PomocService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
