import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details.component';
import { DetailRoutingModule } from './details.routing';
import { MapComponent } from 'src/app/Components/map/map.component';
import { ReviewsComponent } from 'src/app/Components/reviews/reviews.component';
import { HostInfoComponent } from 'src/app/Components/host-info/host-info.component';
@NgModule({
  declarations: [
    DetailsComponent,
    MapComponent,
    ReviewsComponent,
    HostInfoComponent

  ],
  imports: [
    CommonModule,
    DetailRoutingModule

  ]
})
export class DetailModule { }