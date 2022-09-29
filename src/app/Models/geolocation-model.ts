export interface GeolocationInterface {
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