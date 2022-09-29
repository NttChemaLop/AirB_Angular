import { TestBed } from '@angular/core/testing';

import { AirBnbService } from './air-bnb.service';

describe('AirBnbService', () => {
  let service: AirBnbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AirBnbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
