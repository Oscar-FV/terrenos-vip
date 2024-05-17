import { Icon } from "@iconify/react/dist/iconify.js";
import { venueListing } from "../../Models/Venue";

interface Props {
  venue: venueListing;
  isSelected: boolean;
  onClick: (city: string) => void;
}

const VenueItem = ({ venue, isSelected, onClick }: Props) => {
  const handleClick = () => {
    onClick(venue.id);
  };

  return (
    <>
      <div
        className={`mb-4 flex min-w-[90%] cursor-pointer flex-col gap-x-4 overflow-hidden rounded-lg border-b-2 p-4 shadow-sm sm:min-w-[45%] xl:grid xl:grid-cols-2 ${isSelected ? "border-primary/20 bg-primary/20" : "bg-slate-100"}`}
        onClick={handleClick}
      >
        <figure className="h-auto min-h-[8rem] w-full">
          <img
            src={`/images/listing/${venue.id}.webp`}
            alt=""
            className="aspect-auto h-full w-full rounded-lg"
          />
        </figure>
        <figcaption className="mt-5 flex grow flex-col text-secondary md:grow-0 xl:mt-0 2xl:max-w-fit ">
          <h3 className="font-bold uppercase leading-none text-primary md:text-[3cqb]">
            {venue.city},{" "}
            <span className="font-light text-secondary md:text-[2cqb]">
              {venue.estate}
            </span>
          </h3>
          <p className="mt-2 grow text-[1.cqb] md:text-[2cqb]">{venue.info}</p>
          <p className="mt-3 whitespace-break-spaces md:text-[2cqb]">
            Mesualidades Desde
            <strong className="text-primary"> ${venue.price} MXN</strong>
          </p>
          <div className="mt-4 flex w-full justify-end pr-4 text-primary md:text-[2cqb] ">
            <a
              href={venue.brochure} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center font-medium hover:underline"
            >
              Explorar Desarrollo
              <span className="ms-2 h-4 w-4">
                <Icon icon="formkit:arrowright" />
              </span>
            </a>
          </div>
        </figcaption>
      </div>
    </>
  );
};

export default VenueItem;
