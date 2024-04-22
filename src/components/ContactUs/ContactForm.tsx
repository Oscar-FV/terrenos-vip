import { Icon } from "@iconify/react/dist/iconify.js";
import Button from "../common/Button/Button";

const ContactForm = () => {
  return (
    <form className="mt-8 max-w-full md:pr-16 md:mt-16">
      <label
        htmlFor="name"
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
          id="name"
          className="block w-full rounded-lg border border-gray-300 bg-white p-2.5 ps-10 text-sm text-secondary focus:border-primary focus:ring-primary"
          placeholder="Nombre y apellidos"
          required
        />
      </div>
      <label
        htmlFor="email"
        className="mb-2 mt-6 block text-sm font-medium text-white"
      >
        Correo Electrónico
      </label>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5">
          <Icon icon="ic:baseline-email" className="h-5 w-5 text-secondary" />
        </div>
        <input
          type="text"
          id="email"
          className="mb-8 block w-full rounded-lg border border-gray-300 bg-white p-2.5 ps-10 text-sm text-secondary focus:border-primary focus:ring-primary"
          placeholder="ejemplo@dominio.com"
          required
        />
      </div>
      <Button
        text="¡Quiero Saber Más!"
        type="button-secondary"
        className={"border-white text-white hover:border-primary"}
      />
    </form>
  );
};

export default ContactForm;
