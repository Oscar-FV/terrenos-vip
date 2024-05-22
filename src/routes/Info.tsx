import { useEffect, useState } from "react";
import Container from "../components/common/Container/Container";
import Webinar from '../Models/Webinar';
import ContactUs from "../components/ContactUs/Contact";

export default function Info() {
  const [webinarInfo, setWebinarInfo] = useState<Webinar>({} as Webinar);

  useEffect(() => {
    fetch("https://api.npoint.io/a8fec3e9f56cd6a71fa4")
      .then((response) => response.json())
      .then((webinar: Webinar) => {
        setWebinarInfo(webinar);
      });
  }, []);

  return (
    <>
      <Container
        className="mb-10 mt-28 flex w-full flex-col gap-x-24 px-8 md:px-16 lg:flex-row xl:p-0"
        height="lg:min-h-screen h-auto"
      >
        <div className="h-full w-full lg:w-[55%]">
          <div className="w-full justify-center">
            <h1 className="mb-4 bg-gradient-to-br  from-primary to-secondary bg-clip-text text-3xl font-extrabold capitalize leading-none tracking-tight text-transparent md:text-5xl lg:text-6xl">
              ¿Cómo lo hacemos?
            </h1>
            <p className="mb-6 text-lg font-normal text-secondary lg:text-xl">
              Ofrecemos créditos directos con mensualidades muy accesibles,
              diseñadas para que se adapten perfectamente a tu presupuesto. Así,
              puedes empezar a construir tu futuro sin estrés ni sorpresas.
            </p>
          </div>

          <div className="flex w-full flex-wrap justify-center gap-8">
            <div className="w-full border-t-2 border-accent/60 pt-4 lg:w-[45%]">
              <h2 className="mb-2 text-[3cqb] font-extrabold capitalize leading-none tracking-tight text-primary">
                Sin buró de crédito
              </h2>
              <p className="mb-6 text-base font-normal text-secondary">
                Ofrecemos créditos directos con mensualidades muy accesibles,
                diseñadas para que se adapten perfectamente a tu presupuesto.
                Así, puedes empezar a construir tu futuro sin estrés ni
                sorpresas.
              </p>
            </div>
            <div className="w-full border-t-2 border-accent/60 pt-4 lg:w-[45%]">
              <h2 className="mb-2 text-[3cqb] font-extrabold capitalize leading-none tracking-tight text-primary">
                Créditos directos
              </h2>
              <p className="mb-6 text-base font-normal text-secondary">
                Ofrecemos créditos directos con mensualidades muy accesibles,
                diseñadas para que se adapten perfectamente a tu presupuesto.
                Así, puedes empezar a construir tu futuro sin estrés ni
                sorpresas.
              </p>
            </div>
            <div className="w-full border-t-2 border-accent/60 pt-4 lg:w-[45%]">
              <h2 className="mb-2 text-[3cqb] font-extrabold capitalize leading-none tracking-tight text-primary">
                Mensualidades bajas
              </h2>
              <p className="mb-6 text-base font-normal text-secondary">
                Ofrecemos créditos directos con mensualidades muy accesibles,
                diseñadas para que se adapten perfectamente a tu presupuesto.
                Así, puedes empezar a construir tu futuro sin estrés ni
                sorpresas.
              </p>
            </div>
            <div className="w-full border-t-2 border-accent/60 pt-4 lg:w-[45%]">
              <h2 className="mb-2 text-[3cqb] font-extrabold capitalize leading-none tracking-tight text-primary">
                Inversión segura
              </h2>
              <p className="mb-6 text-base font-normal text-secondary">
                Ofrecemos créditos directos con mensualidades muy accesibles,
                diseñadas para que se adapten perfectamente a tu presupuesto.
                Así, puedes empezar a construir tu futuro sin estrés ni
                sorpresas.
              </p>
            </div>
          </div>
        </div>

        <div className="relative z-10 flex w-full flex-col rounded-3xl bg-gradient-to-tl from-primary to-secondary p-8 shadow-md shadow-secondary md:mt-0 lg:w-[45%]">
          <div className="absolute left-[50%] -z-10 opacity-20 lg:left-0">
            <img
              src="/images/webinar-img.png"
              className="sm:w-[20rem] lg:w-full"
              alt="Webinar Image"
            ></img>
          </div>

          <h3 className="text-4xl font-semibold capitalize text-white">
            Unete a nuestro webinar
          </h3>
          <p className="mb-6 text-base font-normal text-white/70 lg:text-xl">
            Obtén información extra sobre cómo comenzar tu inversión con
            nosotros.
          </p>

          {webinarInfo.activo === "si" ? (
            <>
              <div className="grow">
                <h4 className="text-3xl font-semibold capitalize">{webinarInfo.titulo}</h4>
                <p className="mb-4 text-base font-normal text-white/70 lg:text-xl">
                {webinarInfo.descripcion}
                </p>
                <p className="mb-2 text-base lg:text-xl">
                  <strong>Fecha:</strong> {webinarInfo.fecha}
                </p>
                <p className="mb-6 text-base lg:text-xl">
                  <strong>Hora:</strong> {webinarInfo.hora}
                </p>
              </div>

              <div className="flex w-full justify-center">
                <a href={webinarInfo.link} target="_blank">
                  <button className="mb-2 me-2 rounded-lg border border-white px-5 py-2.5 text-center text-base font-medium capitalize text-white hover:bg-white hover:text-secondary focus:outline-none focus:ring-4 focus:ring-white lg:text-xl">
                    ¡Inscríbete al webinar y comienza a aprender!
                  </button>
                </a>
              </div>
            </>
          ) : (
            <div className="grow">
              <h4 className="text-3xl font-semibold capitalize">
                proximamente
              </h4>
              <p className="mb-4 text-base font-normal text-white/70 lg:text-xl">
                Por el momento no tenemos webinars, puedes dejarnos tus datos y uno de nuestros acesores se ocupara de resolver tus dudas. 
              </p>

              <div className="flex w-full justify-center">
                <a href="#contact-info">
                  <button className="mb-2 me-2 rounded-lg border border-white px-5 py-2.5 text-center text-base font-medium capitalize text-white hover:bg-white hover:text-secondary focus:outline-none focus:ring-4 focus:ring-white lg:text-xl">
                    ¡Quiero Información!
                  </button>
                </a>
              </div>
            </div>
          )}
        </div>
      </Container>
      <ContactUs/>
    </>
  );
}
