import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { createDefaultDepartment, SimpleInfoResponse } from 'src/app/Models/full-info-model';
import { DepartmentstateService } from 'src/app/Services/departmentstate.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent {
  @Input() department: SimpleInfoResponse = createDefaultDepartment();


  constructor(private router: Router,private departmentStateService : DepartmentstateService){


  }

  goToDetailsPage(department:SimpleInfoResponse):void{
    this.departmentStateService.setDepartment(department);
    this.router.navigate([`detail/${department._id}`])
  
  }

}
