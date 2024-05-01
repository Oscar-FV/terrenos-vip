import { useState } from "react";
import Container from "../common/Container/Container";
import VenueItem from "./VenueItem";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";
import Location from "../../Models/Location";

const VenueListing = () => {
  const [position, setPosition] = useState({
    lat: 21.929509691751438,
    lng: -102.28782625174749,
  });

  const testPosition = {
    lat: 22.161916849058013,
    lng: -100.97609187755027,
  };
  const testPosition2 = {
    lat: 21.929509691751438,
    lng: -102.28782625174749,
  };

  const handleVenueItemClick = (veneuPosition: Location) => {
    setPosition(veneuPosition);
  };

  return (
    <>
      <Container
        className="mb-10 mt-28 md:grid md:grid-cols-2 flex flex-col md:grid-rows-none md:gap-x-4 md:px-16 px-8 xl:p-0"
        height="md:h-screen h-fit"
      >
        <article className="col-span-2 flex min-h-[28rem] w-full overflow-x-scroll pr-2 md:gap-x-0 gap-x-3 md:col-span-1 md:block md:h-auto md:overflow-y-scroll">
          <VenueItem location={testPosition2} onClick={handleVenueItemClick} />
          <VenueItem location={testPosition} onClick={handleVenueItemClick} />
          <VenueItem location={position} onClick={handleVenueItemClick} />
          <VenueItem location={position} onClick={handleVenueItemClick} />
          <VenueItem location={position} onClick={handleVenueItemClick} />
          <VenueItem location={position} onClick={handleVenueItemClick} />
        </article>

        <figure className="col-span-2 md:h-full min-h-[20rem] w-full overflow-hidden rounded-lg md:col-span-1  md:mt-0">
          <APIProvider apiKey={import.meta.env.VITE_GOOGLEMAPS_KEY}>
            <Map center={position} zoom={15} fullscreenControl={false}>
              <Marker position={position} />
            </Map>
          </APIProvider>
        </figure>
      </Container>
    </>
  );
};
export default VenueListing;
