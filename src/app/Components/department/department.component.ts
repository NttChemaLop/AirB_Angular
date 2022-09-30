import { Component, Input, OnInit } from '@angular/core';
import { createDefaultDepartment, simpleInfoResponse } from 'src/app/Models/full-info-model';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent {
  @Input() department: simpleInfoResponse = createDefaultDepartment();
}
