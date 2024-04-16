import { forwardRef } from "react"
import Container from "../common/Container/Container"
import "./Gallery.css"
import Button from "../common/Button/Button"

interface Props {
    color: string,
    text: string
}

const Gallery = forwardRef<HTMLDivElement, Props>(({ color, text }, ref) => {

    return (

        <Container>
            <div ref={ref} data-color={color} data-text={text} className="h-full mt-20 md:mx-4 xl:m-0">

                <h2 className="font-bold text-primary hero-tittle">Nuestras Top Sedes</h2>
                <h3 className="mt-1 text-3xl">Descubre nuestras sedes favoritas</h3>

                <div className="flex mt-8 gap-x-6 carousel">
                    <input type="radio" name="slides" id="merida" className="hidden" defaultChecked />
                    <input type="radio" name="slides" id="cancun" className="hidden" />
                    <input type="radio" name="slides" id="aguascalientes" className="hidden" />
                    <div className="flex flex-col gap-y-6 slides w-[60%] grow">
                        <ul className="carousel-slides mx-[10px]">
                            <li className=" slide">
                                <figure>
                                    <span className="venue-tittle  bg-white absolute rounded-br-[50px] px-4 py-4 uppercase font-bold">mérida, <span className="font-light">yuc</span></span>
                                    <img src="/images/merida.webp" loading="lazy" alt="" />
                                </figure>
                            </li>
                            <li className="slide">
                                <figure>
                                    <span className="venue-tittle  bg-white absolute rounded-br-[50px] px-4 py-4 uppercase font-bold">cancún, <span className="font-light">q.roo</span></span>
                                    <img src="/images/quintanaroo.webp" loading="lazy" alt="" />
                                </figure>
                            </li>
                            <li className="slide">
                                <figure>
                                    <span className="venue-tittle bg-white absolute rounded-br-[50px] px-4 py-4 uppercase font-bold">aguascalientes, <span className="font-light">ags</span></span>
                                    <img src="/images/aguascalientes.webp" loading="lazy" alt="" />
                                </figure>
                            </li>
                        </ul>

                        <ul className="flex justify-center gap-x-4 slide-thumbnails">
                            <li className="thumbnail thumbnail-active">
                                <label htmlFor="merida" className="cursor-pointer">
                                    <img src="/images/merida.webp" loading="lazy" className="h-full" />
                                    <p className="uppercase text-center mt-2 xl:text-sm text-xs">Mérida</p>
                                </label>
                            </li>
                            <li className="thumbnail cursor-pointer">
                                <label htmlFor="cancun" className="cursor-pointer">
                                    <img src="/images/quintanaroo.webp" loading="lazy" className="h-full" />
                                    <p className="uppercase text-center mt-2 xl:text-sm text-xs">cancún</p>
                                </label>
                            </li>
                            <li className="thumbnail cursor-pointer">
                                <label htmlFor="aguascalientes" className="cursor-pointer">
                                    <img src="/images/aguascalientes.webp" loading="lazy" className="h-full" />
                                    <p className="uppercase text-center mt-2 xl:text-sm text-xs">aguascalientes</p>
                                </label>
                            </li>
                        </ul>
                    </div>

                    <div className="w-full captions">
                        <figcaption className="caption ">
                            <div className="caption-text h-fit">
                                <p className="">
                                    Mérida se ha distinguido no solo por ser una de las ciudades más seguras del país, también lo ha hecho por su crecimiento inmobiliario e industrial.
                                </p>
                                <p className="mt-4">
                                    En los últimos años ha tenido un aumento en plusvalía del 8.5% en estas y más áreas.
                                </p>
                            </div>
                            <div className="caption-info h-fit mt-6">
                                <h3 className="font-bold">Comieza tu inversión desde:</h3>
                                <p className="font-extrabold text-primary">$2,050 MXN al mes</p>

                                <div className="flex gap-x-4 mt-6">
                                    <Button text="Explora El Desarrollo" />
                                    <Button type="button-secondary" text="Conoce Nuestas Sedes" />
                                </div>
                            </div>
                        </figcaption>
                        <figcaption className="caption ">
                            <div className="caption-text h-fit">
                                <p className="">
                                    Cancún se ha distinguido no solo por ser uno de los destinos turísticos más populares del país, sino también por su crecimiento económico y urbanístico.
                                </p>
                                <p className="mt-4">
                                    Cancún destaca como el principal destino turístico gracias a su excelente conectividad aérea y terrestre.
                                </p>
                            </div>
                            <div className="caption-info h-fit mt-6">
                                <h3 className="font-bold">Comieza tu inversión desde:</h3>
                                <p className="font-extrabold text-primary">$2,050 MXN al mes</p>

                                <div className="flex gap-x-4 mt-6">
                                    <Button text="Explora El Desarrollo" />
                                    <Button type="button-secondary" text="Conoce Nuestas Sedes" />
                                </div>
                            </div>
                        </figcaption>
                        <figcaption className="caption ">
                            <div className="caption-text h-fit">
                                <p className="">
                                    Aguascalientes ha destacado no solo por ser una de las ciudades más prósperas del país, sino también por su crecimiento económico y cultural.
                                </p>
                                <p className="mt-4">
                                    Los inmuebles en Aguascalientes ofrecen una plusvalía y retorno de inversión superiores a la bolsa de valores.
                                </p>
                            </div>
                            <div className="caption-info h-fit mt-6">
                                <h3 className="font-bold">Comieza tu inversión desde:</h3>
                                <p className="font-extrabold text-primary">$2,050 MXN al mes</p>

                                <div className="flex gap-x-4 mt-6">
                                    <Button text="Explora El Desarrollo" />
                                    <Button type="button-secondary" text="Conoce Nuestas Sedes" />
                                </div>
                            </div>
                        </figcaption>
                    </div>
                </div>

            </div>
        </Container>

    )

})

export default Gallery