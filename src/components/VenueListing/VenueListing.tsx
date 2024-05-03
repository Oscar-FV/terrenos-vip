import { useEffect, useState } from "react";
import Container from "../common/Container/Container";
import VenueItem from "./VenueItem";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";
import Listing from "../../consts/Listing";
import { venueListing } from "../../Models/Venue";
import { useSearchParams } from "react-router-dom";
import { isMainThread } from "worker_threads";

const VenueListing = () => {
  const [selectedVenue, setSelectedVenue] = useState<venueListing>();
  const [isMapVisible, setIsMapVisible] = useState<boolean>();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const currentVenue = searchParams.get("sede");
    if (currentVenue) {
      setSelectedVenue(Listing.find((venue) => venue.id === currentVenue));
    }
  }, [searchParams]);

  useEffect(() => {
    const handleResize = () => {
      setIsMapVisible(window.matchMedia("(min-width: 768px)").matches);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const handleVenueItemClick = (cityID: string) => {
    setSearchParams(`?sede=${cityID}`);
  };

  return (
    <>
      <Container
        className="mb-10 mt-28 flex flex-col px-8 md:grid md:grid-cols-2 md:grid-rows-none md:gap-x-4 md:px-16 xl:p-0"
        height="md:h-screen h-fit"
      >
        <article className="col-span-2 flex min-h-[28rem] w-full gap-x-3 overflow-y-hidden overflow-x-scroll pr-2 md:col-span-1 md:block md:h-auto md:gap-x-0 md:overflow-y-scroll">
          {Listing.map((venue) => (
            <VenueItem
              key={venue.id}
              venue={venue}
              onClick={handleVenueItemClick}
              isSelected={selectedVenue! && venue.id === selectedVenue.id}
            />
          ))}
        </article>
        {isMapVisible && (
          <figure className="hidden min-h-[20rem] w-full overflow-hidden rounded-lg md:col-span-1 md:mt-0 md:block  md:h-full">
            <APIProvider apiKey={import.meta.env.VITE_GOOGLEMAPS_KEY}>
              <Map
                center={selectedVenue?.location}
                zoom={15}
                fullscreenControl={false}
                mapTypeControl={false}
                zoomControl={false}
                streetViewControl={false}
              >
                <Marker position={selectedVenue?.location} />
              </Map>
            </APIProvider>
          </figure>
        )}
      </Container>
    </>
  );
};
export default VenueListing;
