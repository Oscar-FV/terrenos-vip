import { forwardRef } from "react"
import Container from "../common/Container/Container"
import "./Gallery.css"

interface Props {
    color: string,
    text: string
}

const Gallery = forwardRef<HTMLDivElement, Props>(({ color, text }, ref) => {

    return (

        <Container>
            <div ref={ref} data-color={color} data-text={text} className="h-full mt-20">

                <h2 className="font-bold text-primary hero-tittle">Nuestras Top Sedes</h2>
                <h3 className="mt-1 text-3xl">Descubre nuestras sedes favoritas</h3>

                <div className="flex h-full mt-8">
                    <div className="w-full flex flex-col gap-y-6 slides">

                        <input type="radio" name="slides" defaultChecked id="merida" className="hidden" />
                        <input type="radio" name="slides" id="cancun" className="hidden" />
                        <input type="radio" name="slides" id="aguascalientes" className="hidden" />

                        <ul className="carousel-slides mx-[10px]">
                            <li className=" slide">
                                <figure>
                                    <span className="venue-tittle bg-white absolute rounded-br-[50px] px-4 py-4 uppercase font-bold">mérida, <span className="font-light">yuc</span></span>
                                    <img src="/images/merida.webp" loading="lazy" alt="" />
                                </figure>
                            </li>
                            <li className="slide">
                                <figure>
                                    <span className="venue-tittle bg-white absolute rounded-br-[50px] px-4 py-4 uppercase font-bold">cancún, <span className="font-light">q.roo</span></span>
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
                                    <p className="uppercase text-center mt-2">Mérida</p>
                                </label>
                            </li>
                            <li className="thumbnail cursor-pointer">
                                <label htmlFor="cancun" className="cursor-pointer">
                                    <img src="/images/quintanaroo.webp" loading="lazy" className="h-full" />
                                    <p className="uppercase text-center mt-2">cancún</p>
                                </label>
                            </li>
                            <li className="thumbnail cursor-pointer">
                                <label htmlFor="aguascalientes" className="cursor-pointer">
                                    <img src="/images/aguascalientes.webp" loading="lazy" className="h-full" />
                                    <p className="uppercase text-center mt-2">aguascalientes</p>
                                </label>
                            </li>
                        </ul>
                    </div>

                    <div className="border border-yellow-500 w-full">
                        <figcaption>
                        </figcaption>
                    </div>
                </div>

            </div>
        </Container>

    )

})

export default Gallery