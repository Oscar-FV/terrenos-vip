import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { venueListing } from "../Models/Venue";
import Listing from "../consts/Listing";

export function useVenueSelection() {
  const [selectedVenue, setSelectedVenue] = useState<venueListing>(Listing[0]);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleVenueItemClick = (cityID: string) => {
    setSearchParams(`?sede=${cityID}`);
  };

  useEffect(() => {
    const currentVenue = searchParams.get("sede");
    if (currentVenue) {
      const foundedVenue = Listing.find((venue) => venue.id === currentVenue);
      if (foundedVenue) {
        setSelectedVenue(foundedVenue);
      }
    }
  }, [searchParams]);

  return {
    selectedVenue,
    handleVenueItemClick
  };
}
