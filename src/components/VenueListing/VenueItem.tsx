import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";
import { venueListing } from "../../Models/Venue";

interface Props {
  venue: venueListing
  isSelected: boolean
  onClick: (city: string) => void
}

const VenueItem = ( {venue, isSelected, onClick}: Props ) => {

  const handleClick = () => {
    onClick(venue.id)
  }

  return (
    <>
      <div className={`mb-4 flex cursor-pointer sm:min-w-[45%] min-w-[90%] flex-col gap-x-4 overflow-hidden rounded-lg border-b-2 p-4 shadow-md lg:flex-row ${isSelected ? "bg-primary/20" : "bg-slate-100"}`} onClick={handleClick}>
        <figure className="h-auto w-full lg:max-w-[40%]">
          <img
            src={`/images/listing/${venue.id}.webp`}
            alt=""
            className="aspect-auto h-full w-full rounded-lg"
          />
        </figure>
        <figcaption className="md:mt-1 mt-3 text-secondary flex flex-col grow lg:max-w-[55%] 2xl:max-w-fit md:grow-0">
          <h3 className="font-bold leading-none text-primary md:text-[3cqb] uppercase">
            {venue.city},{" "}
            <span className="font-light text-secondary md:text-[2cqb]">
              {venue.estate}
            </span>
          </h3>
          <p className="mt-2 md:text-[2cqb] text-[1.cqb] grow">
            {venue.info}
          </p>
          <p className="mt-3 md:text-[2cqb] whitespace-break-spaces">
            Mesualidades Desde
            <strong className="text-primary">  ${venue.price} MXN</strong>
          </p>
          <div className="mt-4 flex w-full justify-end pr-4 text-primary md:text-[2cqb]">
            <Link
              to="/sedes/x"
              className="inline-flex items-center font-medium hover:underline"
            >
              Explorar Desarrollo
              <span className="ms-2 h-4 w-4">
                <Icon icon="formkit:arrowright" />
              </span>
            </Link>
          </div>
        </figcaption>
      </div>
    </>
  );
};

export default VenueItem;
