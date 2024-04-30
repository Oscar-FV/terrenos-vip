import { forwardRef } from "react";
import Button from "../common/Button/Button";
import Container from "../common/Container/Container";
import Grid from "../common/Grid/Grid";

import "./HeroSection.css";
import { Icon } from "@iconify/react/dist/iconify.js";

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
          className="absolute z-10 flex h-full w-full flex-col items-center justify-center overflow-x-hidden p-4 md:static md:w-[40vw] md:p-0"
        >
          <div className="flex flex-col items-center justify-center">
            <h1 className="md:hero-tittle hero-tittle-mobile font-outline-2 md:font-outline-none animate-fade-right font-medium text-primary">
              Terrenos VIP
            </h1>
            <img
              src="/images/logo-ciudad-maderas.webp"
              className="h-6 animate-fade-right"
              alt="ciudad maderas terrenos"
            />

            <div className="mb-5 mt-8 animate-fade animate-delay-500">
              <p className="md:font-outline-none text-2xl text-white md:text-secondary xl:text-2xl">
                Descubre el poder de invertir con Terrenos VIP.
              </p>
              <p className="md:font-outline-none text-2xl text-white md:text-secondary xl:text-2xl">
                Tu elección para un futuro financiero sólido.
              </p>
            </div>
            <div className="mt-5 flex w-full animate-fade justify-center animate-delay-500 md:flex-none md:justify-start">
              <Button
                type="button-arrow"
                text="Conoce Más"
                goto="#top-venues"
              />
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
