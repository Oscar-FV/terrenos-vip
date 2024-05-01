import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";

const VenueItem = () => {
  return (
    <>
      <div className="mb-4 flex flex-col gap-x-4 overflow-hidden rounded-lg p-4 lg:flex-row cursor-pointer border-b-2 shadow-md">
        <figure className="h-auto w-full max-w-[full] lg:max-w-[16rem]">
          <img
            src="/images/ags-familyclub.jpg"
            alt=""
            className="aspect-auto h-full w-full rounded-lg"
          />
        </figure>
        <figcaption className="mt-1 text-secondary">
          <h3 className="font-bold leading-none text-primary md:text-[3cqb]">
            Aguascalientes,{" "}
            <span className="font-light text-secondary md:text-[2cqb]">
              Aguascalientes
            </span>
          </h3>
          <p className="mt-2 md:text-[2cqb]">
            Invierte en el Bajío, en un estado propicio para disfrutar de cada
            día y de sus atractivos. Además, de asegurar mayor calidad de vida.
          </p>
          <p className="mt-3 md:text-[2cqb]">
            Mesualidades Desde{" "}
            <strong className="text-primary">$1,915 MXN</strong>
          </p>
          <div className="flex w-full justify-end mt-4 pr-4 md:text-[2cqb] text-primary">
            <Link to="/sedes/x" className="inline-flex items-center font-medium hover:underline">
                Explorar Desarrollo 
                <span className="w-4 h-4 ms-2">
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
