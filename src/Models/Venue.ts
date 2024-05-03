import Location from "./Location"

export default interface Venue  {
    id: string,
    city: string,
    estate: string,
}

export interface topVenue extends Venue {
    paragraph1: string,
    paragraph2: string
    image: string,
    ahref: string 
}

export interface venueListing extends Venue {
    info: string,
    price: string,
    location: Location 
}