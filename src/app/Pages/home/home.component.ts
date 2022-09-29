import { Component, OnInit } from '@angular/core';
import { AirBnbService } from 'src/app/Services/air-bnb.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private geoPosition :Geolocation;


  constructor(private airBnbService: AirBnbService) { 

    this.geoPosition = navigator.geolocation;

  }

  ngOnInit(): void {

    const getPositionSucces=(geoPositon:GeolocationPosition)=>{
      console.log(geoPositon);
      const position = {
        lat: geoPositon.coords.latitude,
        lng: geoPositon.coords.longitude
      }
      this.airBnbService.getDepartments(position);
    }

    
    const getPositionError=()=>{
        alert('Por favor activa la geolocalización');
    }


    this.geoPosition.getCurrentPosition(getPositionSucces,getPositionError)

  }

}
