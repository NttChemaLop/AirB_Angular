import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import * as mapApi from 'leaflet';
import { simpleInfoResponse, createDefaultDepartment } from 'src/app/Models/full-info-model';
import { PopUpService } from 'src/app/Services/pop-up.service';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {

  private map!: mapApi.Map;
  @Input() department: simpleInfoResponse = createDefaultDepartment();

  constructor(private popUpService:PopUpService) { }

  
  ngAfterViewInit(): void {
    this.initMap();
  }


  private initMap():void{
    console.log(this.department)

      this.map = mapApi.map('map',{
        center:[this.department.address.location.coordinates[1], this.department.address.location.coordinates[0] ],
        zoom: 17,
      });

      const circle = mapApi.circleMarker([this.department.address.location.coordinates[1], this.department.address.location.coordinates[0]],{})
      circle.addTo(this.map);

      circle.bindPopup(this.popUpService.makeDepartmentPopup(this.department.summary));

      const tiles = mapApi.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 28,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }

 


}
