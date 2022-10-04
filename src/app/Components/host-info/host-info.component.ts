import { Component,  Input } from '@angular/core';
import { FullInfoResponse, DEFAULT_FULL_RESPONSE } from 'src/app/Models/full-info-model';

@Component({
  selector: 'app-host-info',
  templateUrl: './host-info.component.html',

})
export class HostInfoComponent  {
  @Input() department:FullInfoResponse = DEFAULT_FULL_RESPONSE;
  constructor() { }

  

}
