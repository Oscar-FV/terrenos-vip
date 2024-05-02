import { useEffect, useState } from "react";
import Container from "../common/Container/Container";
import VenueItem from "./VenueItem";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";
import Listing from "../../consts/VenueListing";
import { venueListing } from "../../Models/Venue";
import { useSearchParams } from "react-router-dom";

const VenueListing = () => {
  const [selectedVenue, setSelectedVenue] = useState<venueListing>();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const currentVenue = searchParams.get("sede");
    if (currentVenue) {
      setSelectedVenue(Listing.find((venue) => venue.city === currentVenue));
    }
  }, [searchParams]);

  const handleVenueItemClick = (city: string) => {
    setSearchParams(`?sede=${city}`);
  };

  return (
    <>
      <Container
        className="mb-10 mt-28 flex flex-col px-8 md:grid md:grid-cols-2 md:grid-rows-none md:gap-x-4 md:px-16 xl:p-0"
        height="md:h-screen h-fit"
      >
        <article className="col-span-2 flex min-h-[28rem] w-full gap-x-3 overflow-x-scroll pr-2 md:col-span-1 md:block md:h-auto md:gap-x-0 md:overflow-y-scroll">
          {Listing.map((venue) => (
            <VenueItem
              key={venue.city}
              city={venue.city}
              onClick={handleVenueItemClick}
              isSelected={selectedVenue! && venue.city === selectedVenue.city}
            />
          ))}
        </article>

        <figure className="col-span-2 min-h-[20rem] w-full overflow-hidden rounded-lg md:col-span-1 md:mt-0  md:h-full">
          <APIProvider apiKey={import.meta.env.VITE_GOOGLEMAPS_KEY}>
            <Map center={selectedVenue?.location} zoom={15} fullscreenControl={false}>
              <Marker position={selectedVenue?.location} />
            </Map>
          </APIProvider>
        </figure>
      </Container>
    </>
  );
};
export default VenueListing;
