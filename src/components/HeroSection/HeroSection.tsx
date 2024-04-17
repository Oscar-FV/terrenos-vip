import { forwardRef } from "react"
import Button from "../common/Button/Button"
import Container from "../common/Container/Container"
import Grid from "../common/Grid/Grid"

import "./HeroSection.css"

interface Props{
    color: string,
    text: string
}

const HeroSection = forwardRef<HTMLDivElement, Props>(({color, text}, ref) => {
    return(
        <Container className="flex flex-row md:gap-x-10 md:px-16 xl:p-0" height="h-[100svh] md:h-[100vh]">
            <div ref={ref} data-color={color} data-text={text} className="md:w-[40vw] h-full flex flex-col justify-center items-center absolute md:static w-full overflow-x-hidden backdrop-blur-sm md:backdrop-blur-none p-4 md:p-0">
                <div className="flex flex-col justify-center items-center ">
                    <h1 className="font-medium md:hero-tittle hero-tittle-mobile font-outline-2 md:font-outline-none text-primary">
                        Terrenos VIP
                    </h1>
                    <img src="/images/logo-ciudad-maderas.webp" className="h-6" alt="ciudad maderas terrenos" />

                    <div className="mt-8 mb-5">
                        <p className="xl:text-2xl text-2xl text-white md:text-secondary font-outline-2 md:font-outline-none">
                            Descubre el poder de invertir con Terrenos VIP.
                        </p>
                        <p className="xl:text-2xl text-2xl text-white md:text-secondary font-outline-2 md:font-outline-none">Tu elección para un futuro financiero sólido.</p>
                    </div>
                    <div className="w-full mt-5 flex md:flex-none md:justify-start justify-center">
                        <Button type="button-arrow" text="Conoce Más"/>
                    </div>
                </div>
                
                
            </div>
            <div className="w-full md:w-[60vw] h-full md:flex md:justify-center md:items-center">
                <Grid />
            </div>
        </Container>
    )
})

export default HeroSection