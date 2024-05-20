import { Icon } from "@iconify/react";
import { FormEvent, useRef, useState, useCallback, ChangeEvent } from "react";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

interface Props {
  emailStatus: (status: EmailJSResponseStatus) => void;
}

const ContactForm = ({ emailStatus }: Props) => {
  const formRef = useRef<HTMLFormElement>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [isButtonEnabled, setIsButtonEnabled] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) {
      console.error("Form reference is not set.");
      return;
    }

    if (!recaptchaToken) {
      console.error("reCAPTCHA validation failed.");
      return;
    }
    try {
      const response = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );
      emailStatus(response);
      formRef.current.reset();
      recaptchaRef.current?.reset();
      setRecaptchaToken(null);
      setIsButtonEnabled(false);
    } catch (error) {
      console.error("Failed to send email:", error);
      emailStatus(error as EmailJSResponseStatus);
    }
  };

  const handleRecaptchaChange = useCallback((token: string | null) => {
    setRecaptchaToken(token);
    setIsButtonEnabled(!!token);
  }, []);

  const onInputChange = (e: ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "") {
      e.target.setCustomValidity("Selecciona una opción");
    } else {
      e.target.setCustomValidity("");
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
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

      <div className="flex md:flex-row flex-col w-full md:gap-4">
        <div className="md:w-[70%]">
          <label
            htmlFor="from_email"
            className="mb-2 mt-3 block text-sm font-medium text-white md:mt-6"
          >
            Correo Electrónico
          </label>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5">
              <Icon
                icon="ic:baseline-email"
                className="h-5 w-5 text-secondary"
              />
            </div>
            <input
              type="email"
              className="mb-2 block w-full rounded-lg border border-gray-300 bg-white p-2.5 ps-10 text-sm text-secondary focus:border-primary focus:ring-primary"
              placeholder="ejemplo@dominio.com"
              required
              name="from_email"
            />
          </div>
        </div>

        <div className="md:w-[30%]">
          <label
            htmlFor="from_phone"
            className="mb-2 mt-3 block text-sm font-medium text-white md:mt-6"
          >
            Numero De Teléfono
          </label>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5">
              <Icon
                icon="ic:baseline-phone"
                className="h-5 w-5 text-secondary"
              />
            </div>
            <input
              type="tel"
              className="mb-2 block w-full rounded-lg border border-gray-300 bg-white p-2.5 ps-10 text-sm text-secondary focus:border-primary focus:ring-primary"
              placeholder="4441234579"
              pattern="[0-9]{10}"
              required
              name="from_phone"
            />
          </div>
        </div>
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
            onChange={onInputChange}
          >
            <option value="" hidden></option>
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
            onChange={onInputChange}
          >
            <option value="" hidden></option>
            <option value="$1,900MXN a $2,500MXN">$1,900MXN a $2,500MXN</option>
            <option value="$2,500MXN a $6,000MXN">$2,500MXN a $6,000MXN</option>
            <option value="$6,000MXN a $12,000MXN">
              $6,000MXN a $12,000MXN
            </option>
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
            onChange={onInputChange}
          >
            <option value="" hidden></option>
            <option value="$5,000MXN a $15,000MX">
              $5,000MXN a $15,000MXN
            </option>
            <option value="$15,000MXN a $30,000MXN">
              $15,000MXN a $30,000MXN
            </option>
            <option value="$30,000MXN a $50,000MXN">
              $30,000MXN a $50,000MXN
            </option>
            <option value="Más de $50,000MXN">Más de $50,000MXN</option>
          </select>
        </span>
      </div>

      <ReCAPTCHA
        ref={recaptchaRef}
        sitekey={import.meta.env.VITE_GOOGLE_SITE}
        onChange={handleRecaptchaChange}
        className="mb-6"
        size="normal"
      />

      <input
        id="contact-submit"
        disabled={!isButtonEnabled}
        type="submit"
        value="¡Quiero Saber Más!"
        className="rounded-lg border-2 border-white bg-transparent px-3 py-2 text-center text-base text-white transition-colors duration-200 ease-in-out hover:border-primary hover:bg-primary focus:outline-none focus:ring-4 focus:ring-blue-300 disabled:border-white/50 disabled:text-white/50 disabled:hover:bg-transparent md:text-xl"
      />
    </form>
  );
};

export default ContactForm;
