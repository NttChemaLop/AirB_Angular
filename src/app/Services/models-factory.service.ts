import { Injectable } from '@angular/core';
import { Address,Location,SimpleInfoResponse,Images,Bathrooms } from '../Models/full-info-model';
import { UserLocationInterface } from '../Models/user-location-model';

@Injectable({
  providedIn: 'root'
})
export class ModelsFactoryService {

  constructor() { }


  createLocation(latitude: number, longitude:number):UserLocationInterface{

    return {...{
        position:{
          lat: latitude,
          lng : longitude
        }
      }}
  }

  createEmptySimpleDeparment():SimpleInfoResponse{
    return {...{
      _id:'',
      images:                this.createEmptyImages(),
      address:      this.createEmptyAddress(),
      name:                  '',
      review_scores:          {
        review_scores_accuracy
            :
            10,
        review_scores_checkin
            :
            10,
        review_scores_cleanliness
            :
            8,
        review_scores_communication
            :
            10,
        review_scores_location
            :
            8,
        review_scores_rating
            :
            100,
        review_scores_value
            :
            10
    },
      score:                 0,
      summary:               '',
      price:                 this.createEmptyBathrooms()

    }}
  }

    createEmptyAddress():Address {

      return {...{
        country:         '',
        country_code:    '',
        government_area: '',
        location:        this.createEmptyLocation(),
        market:          '',
        street:          '',
        suburb:          '',
      }}
    }

    createEmptyLocation():Location{
      return {...{
        coordinates: [],
        is_location_exact: false,
        type: ''
      }}

    }
    
  
    createEmptyImages():Images{
      return {...{ medium_url:     '',
      picture_url:    '',
      thumbnail_url:  '',
      xl_picture_url: '',}}

    }

    createEmptyBathrooms():Bathrooms{
      return {...{
        $numberDecimal:''
      }}

    }

}


