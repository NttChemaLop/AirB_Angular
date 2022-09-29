import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details.component';
import { DetailRoutingModule } from './details.routing';
@NgModule({
  declarations: [
 DetailsComponent
   
  ],
  imports: [
    CommonModule,
    DetailRoutingModule

  ]
})
export class DetailModule { }