import { Icon } from "@iconify/react/dist/iconify.js";
import { FormEvent, useRef } from "react";
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

interface Props{
  emailStatus: (estatus: EmailJSResponseStatus) => void
}

const ContactForm = ({emailStatus}: Props) => {
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
      .then(
        (response: EmailJSResponseStatus) => {
          emailStatus(response)
        }
      );
  };

  return (
    <form
      ref={form}
      onSubmit={(e) => handleSubmit(e, form)}
      className="mt-8 max-w-full md:mt-16 md:pr-16"
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
          className="mb-8 block w-full rounded-lg border border-gray-300 bg-white p-2.5 ps-10 text-sm text-secondary focus:border-primary focus:ring-primary"
          placeholder="ejemplo@dominio.com"
          required
          name="from_email"
        />
      </div>

      <input
        type="submit"
        value="¡Quiero Saber Más!"
        className="rounded-lg border-2 border-white bg-transparent px-3 py-2 text-center text-base text-white transition-colors duration-200 ease-in-out hover:bg-primary hover:border-primary focus:outline-none focus:ring-4 focus:ring-blue-300 md:text-xl"
      />
    </form>
  );
};

export default ContactForm;
