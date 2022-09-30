import { TestBed } from '@angular/core/testing';

import { ModelsFactoryService } from './models-factory.service';

describe('ModelsFactoryService', () => {
  let service: ModelsFactoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModelsFactoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
