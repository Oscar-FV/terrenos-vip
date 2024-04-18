import { forwardRef } from "react"
import Container from "../common/Container/Container"
import "./Gallery.css"
import Button from "../common/Button/Button"
import topVenues from "../../consts/TopVenues"
import React from "react"

interface Props {
    color: string,
    text: string
}

const Gallery = forwardRef<HTMLDivElement, Props>(({ color, text }, ref) => {
    return (
        <Container height="h-[70vh]">
            <div ref={ref} data-color={color} data-text={text} className="mt-20 md:mx-4 mx-8 xl:m-0">

                <h2 className="font-bold text-primary hero-tittle">Nuestras Top Sedes</h2>
                <h3 className="mt-1 md:text-3xl text-xl">Descubre nuestras sedes favoritas</h3>

                <div className="flex md:flex-row flex-col mt-8 gap-x-6 md:gap-y-4 gap-y-8 carousel">
                    <>
                        {topVenues.map((venue, index) => (
                            <React.Fragment key={venue.city}>
                                <input type="radio" name="slides" id={venue.city} className="hidden" defaultChecked={index === 0} />
                            </React.Fragment>
                        ))}
                    </>
                    <div className="flex flex-col gap-y-6 slides md:w-[60%] w-full grow">
                        <ul className="carousel-slides mx-[10px] md:block hidden">
                            {topVenues.map((venue) =>
                                <li className="slide" key={venue.city}>
                                    <figure>
                                        <span className="venue-tittle  bg-white absolute rounded-br-[50px] px-4 py-4 uppercase font-bold">{venue.city}, <span className="font-light">{venue.estate}</span></span>
                                        <img src={venue.image} loading="lazy" alt="" />
                                    </figure>
                                </li>
                            )}
                        </ul>
                        <ul className="flex justify-center gap-x-4 slide-thumbnails">
                            {topVenues.map((venue) =>
                                <li className="thumbnail thumbnail-active" key={venue.city}>
                                    <label htmlFor={venue.city} className="cursor-pointer">
                                        <img src={venue.image} loading="lazy" className="md:h-full md:aspect-auto aspect-square" />
                                        <p className="uppercase text-center mt-2 md:text-xl sm:text-xs text-[0.5rem]">{venue.city}</p>
                                    </label>
                                </li>
                            )}
                        </ul>
                    </div>

                    <div className="w-full captions">
                        {topVenues.map((venue) =>
                            <figcaption className="caption flex-col">
                                <div className="caption-text md:h-fit">
                                    <p className="">
                                        {venue.paragraph1}
                                    </p>
                                    <p className="mt-4">
                                        {venue.paragraph2}
                                    </p>
                                </div>
                                <div className="caption-info md:h-fit md:mt-6 mt-4 w-full">
                                    <h3 className="font-bold">Comieza tu inversión desde:</h3>
                                    <p className="font-extrabold text-primary">$2,050 MXN al mes</p>

                                    <div className="flex gap-x-4 mt-6">
                                        <Button text="Explora El Desarrollo" />
                                        <Button type="button-secondary" text="Conoce Nuestas Sedes" />
                                    </div>
                                </div>
                            </figcaption>
                        )}
                    </div>
                </div>

            </div>
        </Container>

    )

})

export default Gallery