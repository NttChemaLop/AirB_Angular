import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, pipe, map } from 'rxjs';
import { FullInfoResponse, SimpleInfoResponse } from '../Models/full-info-model';


@Injectable({
  providedIn: 'root'
})
export class DepartmentstateService {




  constructor(private http: HttpClient) {


   }
 
   getDepartments(id:string):Observable<FullInfoResponse>{
    return this.http.get<FullInfoResponse>(`https://airbnb-learning-api.herokuapp.com/listings/${id}`)
     
  }




}
