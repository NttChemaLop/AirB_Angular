import { Component, OnInit, Input } from '@angular/core';
import { FullInfoResponse,DEFAULT_FULL_RESPONSE } from 'src/app/Models/full-info-model';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  @Input() department:FullInfoResponse = DEFAULT_FULL_RESPONSE;
 
  constructor() {

   }

  ngOnInit(): void {
    
   
  }


}
