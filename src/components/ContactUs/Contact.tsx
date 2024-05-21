import { forwardRef, useEffect, useState } from "react";
import ContactForm from "./ContactForm";
import "./Contact.css";
import ContactItem from "./ContactItem";
import { EmailJSResponseStatus } from "@emailjs/browser";
import Toast from "../common/Toast/Toast";

interface Props {
  color?: string;
  text?: string;
}

const ContactUs = forwardRef<HTMLDivElement, Props>(({ color, text }, ref) => {
  const [isEmailSent, setIsEmailSent] = useState<number>(0);
  const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);

  const handleEmailResponse = (emailResponse: EmailJSResponseStatus) => {
    setIsEmailSent(emailResponse.status);
  };

  useEffect(() => {
    if (isEmailSent === 200 || isEmailSent === 400) {

      setShowSuccessMessage(true);
      const timer = setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);

      return () => clearTimeout(timer);
      setIsEmailSent(0);
    }
  }, [isEmailSent]);

  return (
    <article className="md:h-[110vh] sm:h-[130vh] h-[145vh]">
      <div
        ref={ref}
        data-color={color}
        data-text={text}
        className="flex h-full w-full gap-x-10 lg:pr-8"
        id="contact-info"
      >
        <div
          className="relative h-full w-full bg-black lg:w-[80%] xl:w-[65%]"
          id="formDiv"
        >
          {showSuccessMessage && <Toast status={isEmailSent} />}
          <div className="absolute z-10 mt-8 px-8 lg:mt-16 lg:px-16">
            <h2 className="hero-tittle font-bold text-white">Contáctanos</h2>
            <p className="mt-3 w-full pr-8 leading-none text-white md:text-[3cqb] xl:pr-2">
              Nuestro equipo estará encantado de atenderte y proporcionarte la
              asistencia que necesitas.
            </p>
            <p className="mt-5 w-full pr-8 font-bold leading-none text-white md:text-[3cqb] xl:pr-2">
              ¡Esperamos saber de ti pronto!
            </p>
            <ContactForm emailStatus={handleEmailResponse} />
            <div className="mt-10 flex h-full flex-wrap gap-8 sm:justify-center lg:static lg:hidden">
              <ContactItem
                icon="ph:phone-call"
                tittle="Teléfono"
                text="Llámanos al (+52)444-801-0591"
                goto="tel:(+52)4448010591"
              />
              <ContactItem
                icon="ic:baseline-whatsapp"
                tittle="WhatsApp"
                text="Inicia un chat vía WhatsApp con nosotros"
                goto="https://wa.me/+524448010591?text=Me%20interesa%20obtener%20información%20sobre%20los%20terrenos%20que%20tienes%20disponibles"
              />
              <ContactItem
                icon="arcticons:zoom"
                iconClassName="stroke-2"
                tittle="Videollamada"
                text="Agenda una videollamada con nosotros"
                goto="https://calendly.com/sofia-flores-6xoe/30min"
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
        <div className="hidden  h-full flex-col gap-y-24 pt-16 lg:static lg:flex">
          <ContactItem
            icon="ph:phone-call"
            tittle="Teléfono"
            text="Llámanos al (+52)444-801-0591"
            goto="tel:(+52)4448010591"
          />
          <ContactItem
            icon="ic:baseline-whatsapp"
            tittle="WhatsApp"
            text="Inicia un chat vía WhatsApp con nosotros"
            goto="https://wa.me/+524448010591?text=Me%20interesa%20obtener%20información%20sobre%20los%20terrenos%20que%20tienes%20disponibles"
          />
          <ContactItem
            icon="arcticons:zoom"
            iconClassName="md:stroke-2"
            tittle="Videollamada"
            text="Agenda una videollamada con nosotros"
            goto="https://calendly.com/sofia-flores-6xoe/30min"
          />
        </div>
      </div>
    </article>
  );
});

export default ContactUs;
