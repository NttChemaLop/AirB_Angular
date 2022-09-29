import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AirBnbService {

  constructor(private http: HttpClient) { }


  getDepartments(geo: Geolocation){
    return this.http.post('https://airbnb-learning-api.herokuapp.com/search', geo)    
  }

}
