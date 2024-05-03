import { forwardRef } from "react";
import Container from "../common/Container/Container";
import "./TimeLine.css";
import ListItems from "../../consts/TimeLineInfo";
import TimeLineItem from "./TimeLineItem";

interface Props {
  color: string;
  text: string;
}

const TimeLine = forwardRef<HTMLDivElement, Props>(({ color, text }, ref) => {
  return (
    <Container height="" className="mx-8 md:mx-4 lg:mx-0 lg:pt-32  pb-32" id="info">
      <div ref={ref} data-color={color} data-text={text} className=" h-full">
        <h2 className="hero-tittle mt-10 font-bold">¿Cómo Funciona?</h2>
        <h3 className="mt-1 text-xl md:text-3xl">
          Descubre, elige, contáctanos. ¡Nosotros nos encargamos del resto!
        </h3>

        <div className="mt-10 flex justify-center lg:mx-32">
          <ol className="h-auto w-full md:relative">
            <li className="absolute left-[50%] top-[20px] hidden h-[70%] w-1 translate-x-[-50%] bg-white md:block"></li>
            {ListItems.map((item) => (
              <TimeLineItem
                icon={item.icon}
                tittle={item.tittle}
                text={item.text}
                direction={item.direction}
                key={item.tittle}
              />
            ))}
          </ol>
        </div>
      </div>
    </Container>
  );
});

export default TimeLine;
