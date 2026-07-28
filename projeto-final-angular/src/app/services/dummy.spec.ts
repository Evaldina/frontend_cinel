import { TestBed } from '@angular/core/testing';

import { Dummy } from './dummy';

describe('Dummy', () => {
  let service: Dummy;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Dummy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
