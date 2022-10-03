import { Component, OnInit } from '@angular/core';
import { FullInfoResponse, SimpleInfoResponse } from 'src/app/Models/full-info-model';
import { DepartmentstateService } from 'src/app/Services/departmentstate.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {


  department!: FullInfoResponse;

  constructor(private departmentStateService : DepartmentstateService) { 
      this.departmentStateService.getDepartments("10082422").subscribe(depart =>{this.department=depart});

  
  }

  ngOnInit(): void {
    console.log(this.department)
  }

}
