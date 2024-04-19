import { forwardRef } from "react";
import Button from "../common/Button/Button";
import Container from "../common/Container/Container";
import Grid from "../common/Grid/Grid";

import "./HeroSection.css";

interface Props {
  color: string;
  text: string;
}

const HeroSection = forwardRef<HTMLDivElement, Props>(
  ({ color, text }, ref) => {
    return (
      <Container
        className="flex flex-row md:gap-x-10 md:px-16 xl:p-0"
        height="h-[100svh] md:h-[100vh]"
      >
        <div
          ref={ref}
          data-color={color}
          data-text={text}
          className="absolute flex h-full w-full flex-col items-center justify-center overflow-x-hidden p-4 backdrop-blur-sm md:static md:w-[40vw] md:p-0 md:backdrop-blur-none"
        >
          <div className="flex flex-col items-center justify-center ">
            <h1 className="md:hero-tittle hero-tittle-mobile font-outline-2 md:font-outline-none font-medium text-primary">
              Terrenos VIP
            </h1>
            <img
              src="/images/logo-ciudad-maderas.webp"
              className="h-6"
              alt="ciudad maderas terrenos"
            />

            <div className="mb-5 mt-8">
              <p className="font-outline-2 md:font-outline-none text-2xl text-white md:text-secondary xl:text-2xl">
                Descubre el poder de invertir con Terrenos VIP.
              </p>
              <p className="font-outline-2 md:font-outline-none text-2xl text-white md:text-secondary xl:text-2xl">
                Tu elección para un futuro financiero sólido.
              </p>
            </div>
            <div className="mt-5 flex w-full justify-center md:flex-none md:justify-start">
              <Button type="button-arrow" text="Conoce Más" />
            </div>
          </div>
        </div>
        <div className="h-full w-full md:flex md:w-[60vw] md:items-center md:justify-center">
          <Grid />
        </div>
      </Container>
    );
  },
);

export default HeroSection;
