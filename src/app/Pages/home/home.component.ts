import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private geoPosition :Geolocation;


  constructor() { 

    this.geoPosition = navigator.geolocation;

  }

  ngOnInit(): void {

    const getPositionSucces=(geoPositon:GeolocationPosition)=>{
      console.log(geoPositon);
    }

    
    const getPositionError=()=>{
        alert('Por favor activa la geolocalización');
    }


    this.geoPosition.getCurrentPosition(getPositionSucces,getPositionError)

  }

}
