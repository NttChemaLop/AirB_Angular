import { TestBed } from '@angular/core/testing';
import {GeolocationInterface, isGeolocationInterface} from '../Models/geolocation-model'
import { ModelsFactoryService } from './models-factory.service';

fdescribe('ModelsFactoryService', () => {
  let service: ModelsFactoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModelsFactoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  

  it('Return a Location type when createLocation is called',()=>{
   //expect(service.createLocation(12, 12)).toBe(isGeolocationInterface(service.createLocation(12, 12)===true));
  })
});
