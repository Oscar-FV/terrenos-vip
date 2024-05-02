import Location from "./Location"

export default interface Venue  {
    city: string,
    estate: string,
    paragraph1: string,
    paragraph2: string
    image: string,
    ahref: string 
}

export interface VenueLK  {
    city: string,
    estate: string,
    paragraph1: string,
    paragraph2: string
    image: string,
    ahref: string 
}

export interface venueListing  {
    city: string,
    estate: string,
    paragraph1: string,
    paragraph2: string
    image: string,
    ahref: string,
    location: Location 
}