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

    this.$departmentState = new BehaviorSubject(this.modelFactory.createEmptySimpleDeparment());
    this.$actualDeparmentState = this.$departmentState.asObservable();

   }

   setDepartment(department:simpleInfoResponse){
    this.$departmentState.next(department)
   }




}
