import { Injectable } from '@angular/core';
import { UserLocationInterface } from '../Models/user-location-model';

@Injectable({
  providedIn: 'root'
})
export class ModelsFactoryService {

  constructor() { }


  createLocation(latitude: number, longitude:number):UserLocationInterface{

    return {...{
        position:{
          lat: latitude,
          lng : longitude
        }
      }}
  }

}
