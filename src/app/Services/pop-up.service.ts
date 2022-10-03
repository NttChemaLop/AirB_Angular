import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopUpService {

  constructor() { }


  makeDepartmentPopup(message:String){
    return `` +
    `<div> ${ message }</div>`
   

  }

}
