import { TestBed } from '@angular/core/testing';

import { DepartmentstateService } from './departmentstate.service';

describe('DepartmentstateService', () => {
  let service: DepartmentstateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DepartmentstateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
