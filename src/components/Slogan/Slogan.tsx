import { forwardRef } from "react";
import "./Slogan.css";

interface Props {
  color: string;
  text: string;
}

const Slogan = forwardRef<HTMLDivElement, Props>(({ color, text }, ref) => {
  return (
    <section
      ref={ref}
      data-color={color}
      data-text={text}
      className="mx-4 flex h-[100vh] flex-col justify-center sm:mx-16 md:mx-24 md:h-[70vh] xl:p-0"
    >
      <h1 className="slogan-text font-bold">
        SOMOS <span className="text-accent">CREADORES</span>
      </h1>
      <h1 className="slogan-text font-bold">
        {" "}
        DE <span className="text-accent">SUEÑOS</span>
      </h1>
    </section>
  );
});

export default Slogan;
