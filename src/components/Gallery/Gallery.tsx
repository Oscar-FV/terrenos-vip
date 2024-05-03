import { forwardRef } from "react";
import Container from "../common/Container/Container";
import "./Gallery.css";
import Button from "../common/Button/Button";
import topVenues from "../../consts/TopVenues";
import React from "react";
import { Link } from "react-router-dom";

interface Props {
  color: string;
  text: string;
}

const Gallery = forwardRef<HTMLDivElement, Props>(({ color, text }, ref) => {

  return (
    <Container height="lg:h-[70vh] mb-16" id="top-venues">
      <div
        ref={ref}
        data-color={color}
        data-text={text}
        className="mx-8 md:mx-4 xl:m-0"
      >
        <h2 className={`hero-tittle font-bold `} >
          Nuestras Top Sedes
        </h2>
        <h3 className={`mt-1 text-xl md:text-3xl `}>
          Descubre nuestras sedes favoritas
        </h3>

        <div className="carousel mt-8 flex flex-col gap-x-6 gap-y-8 md:flex-row md:gap-y-4">
          <>
            {topVenues.map((venue, index) => (
              <React.Fragment key={venue.city}>
                <input
                  type="radio"
                  name="slides"
                  id={venue.city}
                  className="hidden"
                  defaultChecked={index === 0}
                  key={index}
                />
              </React.Fragment>
            ))}
          </>
          <div className="slides flex w-full grow flex-col gap-y-6 md:w-[60%]">
            <ul className="carousel-slides mx-[10px] hidden md:block">
              {topVenues.map((venue) => (
                <li className="slide" key={venue.city}>
                  <figure>
                    <span className="venue-tittle  absolute rounded-br-[50px] bg-white px-4 py-4 font-bold uppercase">
                      {venue.city},{" "}
                      <span className="font-light">{venue.estate}</span>
                    </span>
                    <img src={venue.image} loading="lazy" alt="" />
                  </figure>
                </li>
              ))}
            </ul>
            <ul className="slide-thumbnails flex justify-center sm:flex-nowrap flex-wrap  gap-x-5" >
              {topVenues.map((venue) => (
                <li className={`sm:thumbnail thumbnail-mobile thumbnail-active`} key={venue.city}>
                  <label htmlFor={venue.city} className="cursor-pointer flex flex-col items-center">
                    <img
                      src={venue.image}
                      loading="lazy"
                      className="aspect-square md:aspect-auto md:h-full border-4 border-transparent"
                    />
                    <p className="mt-2 text-center uppercase md:text-[1.6cqb] text-[1.3cqb]">
                      {venue.city}
                    </p>
                  </label>
                </li>
              ))}
            </ul>
          </div>

          <div className="captions w-full">
            {topVenues.map((venue) => (
              <figcaption className="caption flex-col" key={"caption-"  + venue.city}>
                <div className="caption-text md:h-fit">
                  <p className="">{venue.paragraph1}</p>
                  <p className="mt-4">{venue.paragraph2}</p>
                </div>
                <div className="caption-info mt-4 w-full md:mt-6 md:h-fit">
                  <h3 className="font-bold">Comieza tu inversión desde:</h3>
                  <p className="font-extrabold text-primary md:mt-0 mt-1">
                    $2,050 MXN al mes
                  </p>

                  <div className="mt-6 flex gap-x-4">
                    <Button text="Explora El Desarrollo" />
                    <Link  
                    to={"/sedes?sede=mty"}
                    className="rounded-lg border-2 border-primary bg-transparent px-3 py-2 text-center text-base text-primary transition-colors duration-200 ease-in-out hover:bg-primary hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 md:text-xl">
                      Conoce Nuestas Sedes
                    </Link>
                  </div>
                </div>
              </figcaption>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
});

export default Gallery;
