import { Icon } from "@iconify/react/dist/iconify.js";
import { forwardRef, useEffect, useState } from "react";
import ContactForm from "./ContactForm";
import "./Contact.css";
import ContactItem from "./ContactItem";

interface Props {
  color: string;
  text: string;
}

const ContactUs = forwardRef<HTMLDivElement, Props>(({ color, text }, ref) => {
  return (
    <article className="h-[100vh] md:h-[80vh]">
      <div
        ref={ref}
        data-color={color}
        data-text={text}
        className="flex h-full w-full gap-x-4 md:pr-8"
      >
        <div
          className="h-full w-full bg-black md:w-[80%] xl:w-[65%]"
          id="formDiv"
        >
          <div className="absolute z-10 mt-8 px-8 md:mt-16 md:w-[60%] lg:w-[65%] lg:px-16">
            <h2 className="hero-tittle font-bold text-white">Contáctanos</h2>
            <p className="mt-3 w-full pr-8 leading-none text-white md:text-[3cqb] xl:pr-2">
              Nuestro equipo estará encantado de atenderte y proporcionarte la
              asistencia que necesitas.
            </p>
            <p className="mt-5 w-full pr-8 font-bold leading-none text-white md:text-[3cqb] xl:pr-2">
              ¡Esperamos saber de ti pronto!
            </p>
            <ContactForm />
            <div className="flex flex-wrap h-full gap-8 border border-white mt-16 md:static md:hidden">
              <ContactItem
                icon="ph:phone-call"
                tittle="Teléfono"
                text="Llámanos al"
              />
              <ContactItem
                icon="ic:baseline-whatsapp"
                tittle="WhatsApp"
                text="Inicia un chat vía WhatsApp con nosotros"
              />
              <ContactItem
                icon="arcticons:zoom"
                iconClassName="stroke-2"
                tittle="Videollamada"
                text="Agenda una videollamada con nosotros"
              />
            </div>
          </div>
          <img
            src="/images/contactimg-min.jpg"
            alt=""
            loading="lazy"
            className="aspect-auto h-full w-full object-cover opacity-45"
          />
        </div>
        <div className="hidden  h-full grow flex-col gap-y-24 border border-white pt-16 md:static md:flex">
          <ContactItem
            icon="ph:phone-call"
            tittle="Teléfono"
            text="Llámanos al"
          />
          <ContactItem
            icon="ic:baseline-whatsapp"
            tittle="WhatsApp"
            text="Inicia un chat vía WhatsApp con nosotros"
          />
          <ContactItem
            icon="arcticons:zoom"
            iconClassName="md:stroke-2"
            tittle="Videollamada"
            text="Agenda una videollamada con nosotros"
          />
        </div>
      </div>
    </article>
  );
});

export default ContactUs;
