import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserLocationInterface } from '../Models/user-location-model';
import { Observable } from 'rxjs';
import { simpleInfoResponse } from '../Models/full-info-model';
@Injectable({
  providedIn: 'root'
})
export class AirBnbService {

  constructor(private http: HttpClient) { }


  getDepartments(geo: UserLocationInterface):Observable<simpleInfoResponse[]>{
    return this.http.post<simpleInfoResponse[]>('https://airbnb-learning-api.herokuapp.com/search', geo)    
  }

}
