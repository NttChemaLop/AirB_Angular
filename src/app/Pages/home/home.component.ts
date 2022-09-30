import { Component, OnInit } from '@angular/core';
import { UserLocationInterface } from 'src/app/Models/user-location-model';
import { AirBnbService } from 'src/app/Services/air-bnb.service';
import { ModelsFactoryService } from 'src/app/Services/models-factory.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private geoPosition :Geolocation;


  constructor(private airBnbService: AirBnbService,private modelFactory:ModelsFactoryService) { 

    this.geoPosition = navigator.geolocation;

  }

  ngOnInit(): void {

    const getPositionSucces=(geoPositon:GeolocationPosition)=>{
      console.log(geoPositon);
      const position: UserLocationInterface = this.modelFactory.createLocation( geoPositon.coords.latitude,geoPositon.coords.longitude)
      
      this.airBnbService.getDepartments(position).subscribe(console.log);
    }

    
    const getPositionError=()=>{
        alert('Por favor activa la geolocalización');
    }


    this.geoPosition.getCurrentPosition(getPositionSucces,getPositionError)

  }

}
