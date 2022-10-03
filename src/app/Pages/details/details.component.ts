import { Component, OnInit } from '@angular/core';
import { SimpleInfoResponse } from 'src/app/Models/full-info-model';
import { DepartmentstateService } from 'src/app/Services/departmentstate.service';
import { ModelsFactoryService } from 'src/app/Services/models-factory.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {


  department!: SimpleInfoResponse;

  constructor(private departmentStateService : DepartmentstateService) { 
      this.departmentStateService.$actualDeparmentState.subscribe(depart =>{this.department=depart});

  
  }

  ngOnInit(): void {
  }


  

}
