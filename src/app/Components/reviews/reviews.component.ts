import { Component,  Input } from '@angular/core';
import { FullInfoResponse,DEFAULT_FULL_RESPONSE } from 'src/app/Models/full-info-model';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',

})
export class ReviewsComponent  {
  @Input() department:FullInfoResponse = DEFAULT_FULL_RESPONSE;
 



}
