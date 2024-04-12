import Button from "../common/Button/Button"
import Container from "../common/Container/Container"
import Grid from "../common/Grid/Grid"

import "./HeroSection.css"

const HeroSection = () => {
    return(
        <Container className="flex flex-row md:gap-x-10 md:px-16 xl:p-0">
            <div className="md:w-[40vw] h-full flex flex-col justify-center items-center absolute md:static w-full overflow-x-hidden backdrop-blur-sm md:backdrop-blur-none p-4 md:p-0">
                <div className="flex flex-col justify-center items-center ">
                    <h1 className="font-medium md:hero-tittle hero-tittle-mobile text-primary">
                        Terrenos VIP
                    </h1>
                    <img src="/images/logo-ciudad-maderas.webp" className="h-6" alt="ciudad maderas terrenos" />

                    <div className="mt-8 mb-5">
                        <p className="xl:text-2xl text-xl text-white md:text-secondary">
                            Descubre el poder de invertir con Terrenos VIP.
                        </p>
                        <p className="xl:text-2xl text-xl text-white md:text-secondary">Tu elección para un futuro financiero sólido.</p>
                    </div>
                </div>
                <div className="2xl:ml-8 md:w-full">
                    <span className=""><Button type="button-arrow" text="Conoce Más"/></span>
                </div>
                
                
            </div>
            <div className="w-full md:w-[60vw] h-full md:flex md:justify-center md:items-center">
                <Grid />
            </div>
        </Container>
    )
}

export default HeroSection