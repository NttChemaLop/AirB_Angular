import { Component, OnInit } from '@angular/core';
import { FullInfoResponse, SimpleInfoResponse } from 'src/app/Models/full-info-model';
import { DepartmentstateService } from 'src/app/Services/departmentstate.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  public id: string = '';
  department!: FullInfoResponse;

  constructor(private route: ActivatedRoute, private departmentStateService : DepartmentstateService) { 
    this.route.params.subscribe(params => {
      this.id = params['id'];
     
    })
      this.departmentStateService.getDepartments(this.id).subscribe(depart =>{this.department=depart});

  
  }

  ngOnInit(): void {
    console.log(this.department)
  }


  

}
