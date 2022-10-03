import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { createDefaultDepartment, simpleInfoResponse } from 'src/app/Models/full-info-model';
import { DepartmentstateService } from 'src/app/Services/departmentstate.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent {
  @Input() department: simpleInfoResponse = createDefaultDepartment();


  constructor(private router: Router,private departmentStateService : DepartmentstateService){


  }

  goToDetailsPage(department:simpleInfoResponse):void{
    this.departmentStateService.setDepartment(department);
    this.router.navigate([department._id])
  
  }

}
