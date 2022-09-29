import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserLocationInterface } from '../Models/user-location-model';

@Injectable({
  providedIn: 'root'
})
export class AirBnbService {

  constructor(private http: HttpClient) { }


  getDepartments(geo: UserLocationInterface){
    return this.http.post('https://airbnb-learning-api.herokuapp.com/search', geo)    
  }

}
