import { SimpleInfoResponse, DEFAULT_DEPARTMENT } from 'src/app/Models/full-info-model';
import { Component, OnInit } from '@angular/core';
import { ModelsFactoryService } from 'src/app/Services/models-factory.service';
import { AirBnbService } from 'src/app/Services/air-bnb.service';
import { UserLocationInterface } from 'src/app/Models/user-location-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private geoPosition :Geolocation;

  public  departments: SimpleInfoResponse[] = [DEFAULT_DEPARTMENT];

  constructor(private airBnbService: AirBnbService,private modelFactory:ModelsFactoryService) { 
    this.departments = []
    this.geoPosition = navigator.geolocation;

  }

  ngOnInit(): void {

    const getPositionSucces=(geoPositon:GeolocationPosition)=>{

      const position: UserLocationInterface = this.modelFactory.createLocation( geoPositon.coords.latitude,geoPositon.coords.longitude)
      
      this.airBnbService.getDepartments(position).subscribe(d => this.departments = d);
    }

    
    const getPositionError=()=>{
        alert('Por favor activa la geolocalización');
    }


    this.geoPosition.getCurrentPosition(getPositionSucces,getPositionError)

  }

}
