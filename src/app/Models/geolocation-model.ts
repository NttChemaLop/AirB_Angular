export function isGeolocationInterface(geolocation:any):geolocation is GeolocationInterface{
 return !!geolocation.location?.lat; 
}


export type GeolocationInterface= {
    location: Geolocation;
}

export type Geolocation = {
    coords: {
        accurancy: number,
        altitude: number,
        altitudeAccurancy: number,
        heading: number,
        latitude: number,
        longitude: number,
        speed: number
    },
    timestamp: number
}
