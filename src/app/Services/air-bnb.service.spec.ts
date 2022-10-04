import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { AirBnbService } from './air-bnb.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserLocationInterface } from '../Models/user-location-model';

fdescribe('AirBnbService', () => {
  let service: AirBnbService;
  let httpTestingController: HttpTestingController;
  let httpClientSpy: { post: jasmine.Spy };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post']);
    service = TestBed.inject(AirBnbService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('When getDepartments function is called, it should return a deparments list', (done => {
    const testDepartments = [

      {
        "_id": "32308714",
        "name": "SUPER Central location!!! P3",
        "summary": "",
        "price": {
          "$numberDecimal": "60.00"
        },
        "images": {
          "thumbnail_url": "",
          "medium_url": "",
          "picture_url": "https://a0.muscache.com/im/pictures/20069e1d-55b2-46e4-894f-79a7a32d9d05.jpg?aki_policy=large",
          "xl_picture_url": ""
        },
        "address": {
          "street": "Barcelona, Catalunya, Spain",
          "suburb": "Ciutat Vella",
          "government_area": "el Raval",
          "market": "Barcelona",
          "country": "Spain",
          "country_code": "ES",
          "location": {
            "type": "Point",
            "coordinates": [
              2.16954,
              41.37754
            ],
            "is_location_exact": false
          }
        },
        "review_scores": {},
        "score": 1
      },
      {
        "_id": "32338168",
        "name": "Modern One Bedroom Apartment in Eixample Area B142",
        "summary": "Modern apartment with one double bedroom and a double sofa bed in the living room, perfect for a couple or a small family. The apartment is fully equipped with a full bathroom with shower, a small working space, a dinning table in the living room, full equipped kitchen with hob, oven, cookware and dishwasher. The apartment also has a washing machine,free WIFI acces, and towels and bed linens are provided by the property.  The apartment is located just 4 minutes walking to Metro Station Hospital Clínic (Blue Line - L5), from where you will easily move around the city. Close to the apartment you will also find Enrique Grandados Street, a semi pedestrian street where you can find different bars and restaurants and enjoy its good ambient. Also, in the area, you will find grocery shops where to buy all you need during your stay.  IMPORTANT INFORMATION Check-in from 15 p.m.  Check-out before 11 a.m.  The apartment is a non-smoking apartment.  Parties in the apartment are not allowed.  Additi",
        "price": {
          "$numberDecimal": "197.00"
        },
        "images": {
          "thumbnail_url": "",
          "medium_url": "",
          "picture_url": "https://a0.muscache.com/im/pictures/b7959312-6880-459f-b7a6-e6719781c04a.jpg?aki_policy=large",
          "xl_picture_url": ""
        },
        "address": {
          "street": "Barcelona, Spain",
          "suburb": "Eixample",
          "government_area": "l'Antiga Esquerra de l'Eixample",
          "market": "Barcelona",
          "country": "Spain",
          "country_code": "ES",
          "location": {
            "type": "Point",
            "coordinates": [
              2.1529,
              41.38684
            ],
            "is_location_exact": false
          }
        },
        "review_scores": {},
        "score": 1
      },
      {
        "_id": "32362812",
        "name": "THE MOST CENTRAL LOCATION OF THE City! PL1",
        "summary": "Warm place very close to MACBA, for 3 guests, super close to la rambla, gothic, the main attractions  and 15 minutes walk to the beach.",
        "price": {
          "$numberDecimal": "65.00"
        },
        "images": {
          "thumbnail_url": "",
          "medium_url": "",
          "picture_url": "https://a0.muscache.com/im/pictures/c51042ee-4940-44a8-80ea-13b13b290d3c.jpg?aki_policy=large",
          "xl_picture_url": ""
        },
        "address": {
          "street": "Barcelona, Catalunya, Spain",
          "suburb": "Ciutat Vella",
          "government_area": "el Raval",
          "market": "Barcelona",
          "country": "Spain",
          "country_code": "ES",
          "location": {
            "type": "Point",
            "coordinates": [
              2.165,
              41.38294
            ],
            "is_location_exact": true
          }
        },
        "review_scores": {
          "review_scores_rating": 70
        },
        "score": 1
      },
      {
        "_id": "32375230",
        "name": "SWEET HOME NEXT TO SAGRADA FAMILIA",
        "summary": "MINIMUM 32 DAYS This beautiful renovated apartment is located only a few minutes from Sagrada Familia in the center of Barcelona and is perfect for families and quiet groups.  The apartment is extremely quiet for its central location, it has lots of natural light as both bedrooms and the living room are exterior. The apartment has a capacity of maximum four persons and is fully equipped to have a pleasant stay.",
        "price": {
          "$numberDecimal": "50.00"
        },
        "images": {
          "thumbnail_url": "",
          "medium_url": "",
          "picture_url": "https://a0.muscache.com/im/pictures/9d43da43-b101-41a3-84df-190c20603f8c.jpg?aki_policy=large",
          "xl_picture_url": ""
        },
        "address": {
          "street": "Barcelona, Catalunya, Spain",
          "suburb": "La Sagrada Família",
          "government_area": "la Sagrada Família",
          "market": "Barcelona",
          "country": "Spain",
          "country_code": "ES",
          "location": {
            "type": "Point",
            "coordinates": [
              2.17597,
              41.40204
            ],
            "is_location_exact": true
          }
        },
        "review_scores": {},
        "score": 1
      },
      {
        "_id": "32677257",
        "name": "PRIVATE ROOM NEAR CITY CENTER",
        "summary": "Habitación privada con ventana a la terraza e iluminada muy tranquila y limpia",
        "price": {
          "$numberDecimal": "35.00"
        },
        "images": {
          "thumbnail_url": "",
          "medium_url": "",
          "picture_url": "https://a0.muscache.com/im/pictures/516bb48c-5884-4886-9433-3f130752bd3e.jpg?aki_policy=large",
          "xl_picture_url": ""
        },
        "address": {
          "street": "Barcelona, Catalunya, Spain",
          "suburb": "El Raval",
          "government_area": "el Raval",
          "market": "Barcelona",
          "country": "Spain",
          "country_code": "ES",
          "location": {
            "type": "Point",
            "coordinates": [
              2.16459,
              41.38401
            ],
            "is_location_exact": true
          }
        },
        "review_scores": {},
        "score": 1
      },
      {
        "_id": "32745053",
        "name": "SUNNY APARTMENT FIRA BARCELONA CAMP NOU",
        "summary": "Luminoso apartamento totalmente equipado y reformado ideal para familias, grupos de amigos y viajes de negocios con capacidad máxima de 6 personas. Ubicado cerca de la Fira Congres Gran Vía 2, Estadio de Fútbol del Barcelona, Hospital de Sant Joan De Deu, entre el aeropuerto y centro de Barcelona.",
        "price": {
          "$numberDecimal": "80.00"
        },
        "images": {
          "thumbnail_url": "",
          "medium_url": "",
          "picture_url": "https://a0.muscache.com/im/pictures/66316127-01b4-4040-8d3f-dcbba79bfb00.jpg?aki_policy=large",
          "xl_picture_url": ""
        },
        "address": {
          "street": "L'Hospitalet de Llobregat, CT, Spain",
          "suburb": "Sants-Montjuïc",
          "government_area": "Sants - Badal",
          "market": "Barcelona",
          "country": "Spain",
          "country_code": "ES",
          "location": {
            "type": "Point",
            "coordinates": [
              2.12294,
              41.37128
            ],
            "is_location_exact": false
          }
        },
        "review_scores": {},
        "score": 1
      },
      {
        "_id": "3322110",
        "name": "Air conditioned room",
        "summary": "New building in the Raval district, ten minutes walk from the Rambla de Catalunya and fifteen minutes from the beach. the floor is a duplex, on top of the rooms are and at the bottom the bathroom and the kitchen. The bathroom is adapted for people with disabilities, designed with translucent glass to let in light. Fully equipped kitchen, to make juices or sandwiches. The output of the house overlooks a large garden with orange and cats. Optional car parking.",
        "price": {
          "$numberDecimal": "42.00"
        },
        "images": {
          "thumbnail_url": "",
          "medium_url": "",
          "picture_url": "https://a0.muscache.com/im/pictures/f12abc25-199e-4db5-947c-be43d19f72e2.jpg?aki_policy=large",
          "xl_picture_url": ""
        },
        "address": {
          "street": "Barcelona, Catalonia, Spain",
          "suburb": "Ciutat Vella",
          "government_area": "el Raval",
          "market": "Barcelona",
          "country": "Spain",
          "country_code": "ES",
          "location": {
            "type": "Point",
            "coordinates": [
              2.16607,
              41.3784
            ],
            "is_location_exact": true
          }
        },
        "review_scores": {
          "review_scores_rating": 93
        },
        "score": 1
      },
      {
        "_id": "357958",
        "name": "Private terrace and bathroom & WiFi",
        "summary": "Simple and private. The room is small but has lots of natural light and the terrace is right of the (Website hidden by Airbnb) you can enjoy the view, your breakfast, the afternoon sun and relax. Please note that the kitchen is only for making breakfast and that the private bathroom is an older model but clean of course! ;)",
        "price": {
          "$numberDecimal": "57.00"
        },
        "images": {
          "thumbnail_url": "",
          "medium_url": "",
          "picture_url": "https://a0.muscache.com/im/pictures/4566470/80338a6f_original.jpg?aki_policy=large",
          "xl_picture_url": ""
        },
        "address": {
          "street": "Barcelona, Catalonia, Spain",
          "suburb": "Eixample",
          "government_area": "l'Antiga Esquerra de l'Eixample",
          "market": "Barcelona",
          "country": "Spain",
          "country_code": "ES",
          "location": {
            "type": "Point",
            "coordinates": [
              2.15547,
              41.38736
            ],
            "is_location_exact": true
          }
        },
        "review_scores": {
          "review_scores_rating": 96
        },
        "score": 1
      }
    ];
    const position: any = {
      lat: 41.095628607058686,
      lng: -8.626873272456123
    };
    httpClientSpy.post.and.returnValue(of(testDepartments));
    service.getDepartments(position).subscribe({
      next: testDepartments => {
        expect(testDepartments.length).toBe(1);
        expect(testDepartments[0].address.country).toBe("Spain");
        done();
      },
      error: done.fail
    });

    const req_airbnb = httpTestingController.match('https://airbnb-learning-api.herokuapp.com/search');
    req_airbnb.forEach(r => r.flush(testDepartments));
    const req_position = httpTestingController.expectOne('https://airbnb-learning-api.herokuapp.com/id:11136898');
    expect(req_position.request.method).toEqual('POST');
    req_position.flush(position);
    httpTestingController.verify();

  });
});
