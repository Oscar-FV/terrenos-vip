import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";
import Location from "../../Models/Location";

interface Props {
  location: Location
  onClick: (venuePosition: Location) => void
}

const VenueItem = ( {location, onClick}: Props ) => {

  const handleClick = () => {
    const venuePosition = location
    onClick(venuePosition)
  }

  return (
    <>
      <div className="mb-4 flex cursor-pointer sm:min-w-[45%] min-w-[75%] flex-col gap-x-4 overflow-hidden rounded-lg border-b-2 p-4 shadow-md lg:flex-row" onClick={handleClick}>
        <figure className="h-auto w-full lg:max-w-[16rem]">
          <img
            src="/images/ags-familyclub.jpg"
            alt=""
            className="aspect-auto h-full w-full rounded-lg"
          />
        </figure>
        <figcaption className="md:mt-1 mt-3 text-secondary">
          <h3 className="font-bold leading-none text-primary md:text-[3cqb]">
            Aguascalientes,{" "}
            <span className="font-light text-secondary md:text-[2cqb]">
              Aguascalientes
            </span>
          </h3>
          <p className="mt-2 md:text-[2cqb] text-[1.cqb]">
            Invierte en el Bajío, en un estado propicio para disfrutar de cada
            día y de sus atractivos. Además, de asegurar mayor calidad de vida.
          </p>
          <p className="mt-3 md:text-[2cqb]">
            Mesualidades Desde{" "}
            <strong className="text-primary">$1,915 MXN</strong>
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
