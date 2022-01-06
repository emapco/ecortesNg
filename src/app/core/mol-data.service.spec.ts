import { TestBed } from '@angular/core/testing';

import { MolDataService } from './mol-data.service';

describe('MolDataService', () => {
  let service: MolDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MolDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
