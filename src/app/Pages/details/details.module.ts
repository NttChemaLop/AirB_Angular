import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details.component';
import { DetailRoutingModule } from './details.routing';
import { MapComponent } from 'src/app/Components/map/map.component';
@NgModule({
  declarations: [
  DetailsComponent,
  MapComponent
   
  ],
  imports: [
    CommonModule,
    DetailRoutingModule

  ]
})
export class DetailModule { }