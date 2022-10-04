import { Component, OnInit, Input } from '@angular/core';
import { FullInfoResponse, DEFAULT_FULL_RESPONSE } from 'src/app/Models/full-info-model';

@Component({
  selector: 'app-host-info',
  templateUrl: './host-info.component.html',
  styleUrls: ['./host-info.component.css']
})
export class HostInfoComponent implements OnInit {
  @Input() department:FullInfoResponse = DEFAULT_FULL_RESPONSE;
  constructor() { }

  ngOnInit(): void {
  }

}
