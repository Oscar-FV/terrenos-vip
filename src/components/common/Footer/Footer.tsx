import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="mx-auto w-full max-w-screen-2xl p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div>
            <Link
              to="/"
              className="mb-4 flex items-center space-x-3 sm:mb-0 rtl:space-x-reverse"
            >
              <img
                src="/images/logo.webp"
                className="h-8"
                alt="terrenos VIP ciudad maderas"
              />
              <span className="self-center whitespace-nowrap text-2xl font-semibold text-accent">
                Terrenos <span className="text-primary">VIP</span>
              </span>
            </Link>

            <div className="flex mt-8 md:mb-0 mb-8 gap-x-4">
              <a href="https://www.facebook.com/Terrenosvipenmexico">
                <Icon icon="ic:baseline-facebook"  className="text-white hover:text-accent w-8 h-8"/>
              </a>
              <a href="https://www.instagram.com/terrenosvipmx/"> 
                <Icon icon="mdi:instagram"  className="text-white hover:text-accent w-8 h-8"/>
              </a>
            </div>
          </div>

          <ul className="mb-6 flex flex-wrap items-center text-sm font-medium text-white sm:mb-0">
            <li>
              <Link to="/" className="me-4 hover:underline md:me-6">
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/sedes" className="me-4 hover:underline md:me-6">
                Nuestras Sedes
              </Link>
            </li>
            <li>
              <Link to="/informacion" className="me-4 hover:underline md:me-6">
                Sobro Nosotros
              </Link>
            </li>
            <li>
              <a href="#contact-info" className="hover:underline">
                Contacto
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center">
          © 2024{" "}
          <a
            href="https://www.facebook.com/Terrenosvipenmexico"
            className="hover:underline"
          >
            Terrenos VIP.
          </a>
        </span>
        <span className="block text-sm text-gray-500 sm:text-center">
          Made by{" "}
          <a
            href="https://www.linkedin.com/in/oscar-fv/"
            className="underline hover:underline md:no-underline"
          >
            OFV 👾
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
