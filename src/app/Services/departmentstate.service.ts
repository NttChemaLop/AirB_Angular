import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { simpleInfoResponse } from '../Models/full-info-model';
import { ModelsFactoryService } from './models-factory.service';

@Injectable({
  providedIn: 'root'
})
export class DepartmentstateService {

  private $departmentState :BehaviorSubject<simpleInfoResponse>
  public readonly  $actualDeparmentState:Observable<simpleInfoResponse>


  constructor(private modelFactory : ModelsFactoryService) {
    const localData =localStorage.getItem('department')
    const initialState = localData!==null ? JSON.parse(localData):  this.modelFactory.createEmptySimpleDeparment()

    this.$departmentState = new BehaviorSubject(initialState);
    this.$actualDeparmentState = this.$departmentState.asObservable();

   }

   setDepartment(department:simpleInfoResponse){
    localStorage.setItem('department',JSON.stringify(department))
    this.$departmentState.next(department)
   }




}
