
export type FullInfoResponse= {
    _id:                   string;
    access:                string;
    accommodates:          number;
    address:               Address;
    amenities:             string[];
    availability:          Availability;
    bathrooms:             Bathrooms;
    bed_type:              string;
    bedrooms:              number;
    beds:                  number;
    calendar_last_scraped: Date;
    cancellation_policy:   string;
    cleaning_fee:          Bathrooms;
    description:           string;
    extra_people:          Bathrooms;
    guests_included:       Bathrooms;
    host:                  Host;
    house_rules:           string;
    images:                Images;
    interaction:           string;
    last_scraped:          Date;
    listing_url:           string;
    maximum_nights:        string;
    minimum_nights:        string;
    name:                  string;
    neighborhood_overview: string;
    notes:                 string;
    number_of_reviews:     number;
    price:                 Bathrooms;
    property_type:         string;
    review_scores:         ReviewScores;
    reviews:               any[];
    room_type:             string;
    security_deposit:      Bathrooms;
    space:                 string;
    summary:               string;
    transit:               string;
   }

export type SimpleInfoResponse = {
    _id:                   string,
    images:                Images,
    address:               Address,
    name:                  string,
    review_scores:         ReviewScores,
    score:                 number,
    summary:               string,
    price:                 Bathrooms
}

export const DEFAULT_DEPARTMENT: SimpleInfoResponse = {
    _id:                   'string',
    images:                {
        medium_url:     'string',
        picture_url:    'string',
        thumbnail_url:  'string',
        xl_picture_url: 'string'
    },
    address:               {
        country:         'string',
        country_code:    'string',
        government_area: 'string',
        location:        {
            coordinates:       [],
            is_location_exact: true,
            type:              'string'
        },
        market:          'string',
        street:          'string',
        suburb:          'string'
    },
    name:                  'string',
    review_scores:         [],
    score:                 1,
    summary:               'string',
    price:                 {
    $numberDecimal: 'string'
    }

}

export const createDefaultDepartment = (): SimpleInfoResponse => ({...DEFAULT_DEPARTMENT});

   export type Address= {
    country:         string;
    country_code:    string;
    government_area: string;
    location:        Location;
    market:          string;
    street:          string;
    suburb:          string;
   }
   
   export type Location= {
    coordinates:       number[];
    is_location_exact: boolean;
    type:              string;
   }
   
   export type Availability ={
    availability_30:  number;
    availability_365: number;
    availability_60:  number;
    availability_90:  number;
   }
   
   export type Bathrooms= {
    $numberDecimal: string;
   }
   
   export type Host ={
    host_about:                string;
    host_has_profile_pic:      boolean;
    host_id:                   string;
    host_identity_verified:    boolean;
    host_is_superhost:         boolean;
    host_listings_count:       number;
    host_location:             string;
    host_name:                 string;
    host_neighbourhood:        string;
    host_picture_url:          string;
    host_thumbnail_url:        string;
    host_total_listings_count: number;
    host_url:                  string;
    host_verifications:        string[];
   }
   
   export type Images= {
    medium_url:     string;
    picture_url:    string;
    thumbnail_url:  string;
    xl_picture_url: string;
   }
   
   export type ReviewScores ={
   }
   