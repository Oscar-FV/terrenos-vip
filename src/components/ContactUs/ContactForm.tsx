import { Icon } from "@iconify/react/dist/iconify.js";
import { FormEvent, useRef } from "react";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";

interface Props {
  emailStatus: (estatus: EmailJSResponseStatus) => void;
}

const ContactForm = ({ emailStatus }: Props) => {
  const form = useRef<HTMLFormElement>(null);
  const handleSubmit = (
    e: FormEvent<HTMLFormElement>,
    form: React.RefObject<HTMLFormElement>,
  ) => {
    e.preventDefault();

    if (!form.current) {
      console.error("Form reference is not set.");
      return;
    }

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        },
      )
      .then((response: EmailJSResponseStatus) => {
        emailStatus(response);
      });
  };

  return (
    <form
      ref={form}
      onSubmit={(e) => handleSubmit(e, form)}
      className="mt-8 max-w-full md:mt-16 lg:pr-16"
    >
      <label
        htmlFor="from_name"
        className="mb-2 mt-6 block text-sm font-medium text-white"
      >
        Nombre Completo
      </label>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5">
          <Icon icon="mdi:user" className="h-5 w-5 text-secondary" />
        </div>
        <input
          type="text"
          className="block w-full rounded-lg border border-gray-300 bg-white p-2.5 ps-10 text-sm text-secondary focus:border-primary focus:ring-primary"
          placeholder="Nombre y apellidos"
          required
          name="from_name"
        />
      </div>
      <label
        htmlFor="from_email"
        className="mb-2 mt-3 block text-sm font-medium text-white md:mt-6"
      >
        Correo Electrónico
      </label>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5">
          <Icon icon="ic:baseline-email" className="h-5 w-5 text-secondary" />
        </div>
        <input
          type="text"
          className="mb-2 block w-full rounded-lg border border-gray-300 bg-white p-2.5 ps-10 text-sm text-secondary focus:border-primary focus:ring-primary"
          placeholder="ejemplo@dominio.com"
          required
          name="from_email"
        />
      </div>

      <div className="mb-8 mt-3 flex flex-wrap gap-x-4 md:mt-6 md:flex-nowrap">
        <span className="w-[50%] grow md:w-[33%]">
          <label
            htmlFor="venues"
            className="mb-2 block text-sm font-medium text-white"
          >
            ¿Qué sede te interesa?
          </label>
          <select
            required
            id="venues"
            name="venue"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-secondary focus:border-blue-500 focus:ring-blue-500"
          >
            <option hidden>Escoge una sede</option>
            <option value="Cancún">Cancún</option>
            <option value="Mérida">Mérida</option>
            <option value="Aguascalientes">Aguascalientes</option>
            <option value="Monterrey">Monterrey</option>
            <option value="San Luis Potosí">San Luis Potosí</option>
            <option value="León">León</option>
            <option value="Querétaro">Querétaro</option>
          </select>
        </span>

        <span className="mt-2 w-[50%] grow md:mt-0 md:w-[33%]">
          <label
            htmlFor="mensualidades"
            className="mb-2 block text-sm font-medium text-white"
          >
            ¿Cuál sería tu mensualidad ideal?
          </label>
          <select
            required
            id="mensualidades"
            name="mensualidad"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-secondary focus:border-blue-500 focus:ring-blue-500"
          >
            <option hidden>Escoge una mensualidad</option>
            <option value="$1,900MXN a $2,500MXN">$1,900MXN a $2,500MXN</option>
            <option value="$2,500MXN a $6,000MXN">$2,500MXN a $6,000MXN</option>
            <option value="$6,000MXN a $12,000MXN">$6,000MXN a $12,000MXN</option>
          </select>
        </span>

        <span className="mt-2 w-[45%] grow md:mt-0 md:w-[33%]">
          <label
            htmlFor="enganches"
            className="mb-2 block text-sm font-medium text-white"
          >
            ¿Cuál sería tu enganche?
          </label>
          <select
            required
            id="enganches"
            name="enganche"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-secondary focus:border-blue-500 focus:ring-blue-500"
          >
            <option hidden>Escoge un enganche</option>
            <option value="$5,000MXN a $15,000MX">$5,000MXN a $15,000MXN</option>
            <option value="$15,000MXN a $30,000MXN">$15,000MXN a $30,000MXN</option>
            <option value="$30,000MXN a $50,000MXN">$30,000MXN a $50,000MXN</option>
            <option value="Más de $50,000MXN">Más de $50,000MXN</option>
          </select>
        </span>
      </div>

      <input
        type="submit"
        value="¡Quiero Saber Más!"
        className="rounded-lg border-2 border-white bg-transparent px-3 py-2 text-center text-base text-white transition-colors duration-200 ease-in-out hover:border-primary hover:bg-primary focus:outline-none focus:ring-4 focus:ring-blue-300 md:text-xl"
      />
    </form>
  );
};

export default ContactForm;
