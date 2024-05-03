import Container from "../common/Container/Container";
import VenueItem from "./VenueItem";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  InfoWindow,
  useAdvancedMarkerRef,
} from "@vis.gl/react-google-maps";
import Listing from "../../consts/Listing";
import { useVenueSelection } from "../../hooks/useVenueSelection";
import { useShowMap } from "../../hooks/useShowMap";
import { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

const VenueListing = () => {
  const { isMapVisible } = useShowMap();
  const { selectedVenue, handleVenueItemClick } = useVenueSelection();
  const [markerRef, marker] = useAdvancedMarkerRef();
  const [InfoWindowShown, setInfoWindowShown] = useState<boolean>(true);

  const handleMarkerClick = () => {
    setInfoWindowShown(!InfoWindowShown);
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
                mapId={import.meta.env.VITE_GOOGLEMAP_ID}
                draggable={false}
              >
                <AdvancedMarker
                  ref={markerRef}
                  position={selectedVenue.location}
                  onClick={handleMarkerClick}
                >
                  <Icon
                    icon="majesticons:map-marker-area-line"
                    className="h-12 w-12 text-secondary"
                  />
                </AdvancedMarker>
                {InfoWindowShown && (
                  <InfoWindow
                    anchor={marker}
                    onCloseClick={handleMarkerClick}
                  >
                    <div className="flex flex-col gap-y-2">
                      <h3 className="text-secondary font-bold">{selectedVenue.address}</h3>
                      <a  className="text-primary font-bold text-center underline" href={selectedVenue.linkToMaps}>Ver En Google Maps</a>
                    </div>
                  </InfoWindow>
                )}
              </Map>
            </APIProvider>
          </figure>
        )}
      </Container>
    </>
  );
};
export default VenueListing;
