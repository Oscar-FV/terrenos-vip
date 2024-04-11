import Button from "../common/Button/Button"
import Container from "../common/Container/Container"
import Grid from "../common/Grid/Grid"

import "./HeroSection.css"

const HeroSection = () => {
    return(
        <Container className="flex flex-row xl:gap-x-10">
            <div className="flex-grow h-full flex flex-col justify-center items-center">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="font-medium text-7xl text-primary">
                        Terrenos VIP
                    </h1>
                    <img src="/images/logo-ciudad-maderas.webp" className="h-6" alt="ciudad maderas terrenos" />

                    <div className="mt-8 mb-5">
                        <p className="text-2xl">
                            Descubre el poder de invertir con Terrenos VIP.
                        </p>
                        <p className="text-2xl">Tu elección para un futuro financiero sólido.</p>
                    </div>
                </div>
                <div className="w-full flex flex-col gap-y-5">
                        <hr className="ml-20"/>
                        <span className=""><Button type="button-arrow" text="Conoce Más"/></span>
                    </div>
                
            </div>
            <div className="w-[70%] h-full flex justify-center items-center">
                <Grid />
            </div>
        </Container>
    )
}

export default HeroSection