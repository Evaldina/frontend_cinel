import { TestBed } from '@angular/core/testing';

import { SandboxDatabase } from './sandbox-database';

describe('SandboxDatabase', () => {
  let service: SandboxDatabase;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SandboxDatabase);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
