import { useEffect, useRef, useState } from "react";
import useOnClickOutside from "../../../hooks/useOnClickOutside";
import Button from "../Button/Button";
import Hamburger from "hamburger-react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navRef = useRef(null);
  const [isOpen, setOpen] = useState(false);

  useOnClickOutside(navRef, () => {
    if (isOpen) {
      setOpen(false);
    }
  });

  useEffect(() => {
    const menu = document.getElementById("mobile-menu");
    if (menu)
      if (isOpen) {
        menu.classList.replace("nav-closed", "nav-open");
      } else {
        menu.classList.replace("nav-open", "nav-closed");
      }
  }, [isOpen]);

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-0 z-50 w-full border-gray-200 bg-[#F9FEFF] shadow-sm md:px-12 lg:py-2"
      >
        <div className="flex flex-wrap items-center justify-between px-4 py-4 lg:p-4">
          <Link to="/" className="flex items-center space-x-3 pl-4">
            <img
              src="/images/logo.webp"
              className="h-8"
              alt="terrenos VIP ciudad maderas"
            />
            <span className="whitespace-nowrap text-xl font-semibold text-accent sm:text-3xl md:h-7">
              TERRENOS <span className="text-primary">VIP</span>
            </span>
          </Link>
          <span className="lg:hidden">
            <Hamburger
              toggled={isOpen}
              toggle={setOpen}
              size={20}
              color="#003764"
            />
          </span>
          <div className="hidden w-full md:w-auto lg:block" id="navbar-default">
            <ul className="mt-4 flex flex-col items-center rounded-lg border border-gray-100 bg-gray-50 text-lg md:mt-0 md:flex-row md:space-x-6 md:border-0 md:bg-white md:p-0">
              <li>
                <Link
                  to="/sedes?sede=mty"
                  className="navItem block rounded px-3 text-secondary md:border-0 md:p-0"
                >
                  Sedes
                </Link>
              </li>
              <li>
                <Link
                  to="/informacion"
                  className="navItem block rounded px-3 text-secondary md:border-0 md:p-0"
                >
                  Información
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="navItem block rounded px-3 text-secondary md:border-0 md:p-0"
                >
                  Webinars
                </a>
              </li>
              <li>
                <Button text="¡Contáctanos!" goto="#contact-info" />
              </li>
            </ul>
          </div>
        </div>
        <div className="nav-open bg-white lg:hidden" id="mobile-menu">
          <div
            className="flex h-full items-center justify-center"
            id="navbar-default"
          >
            <ul className="flex flex-col items-center gap-y-3 pb-5 text-lg">
              <li>
                <Link
                  to="/sedes?sede=mty"
                  className="navItem block rounded px-3 text-secondary md:border-0 md:p-0"
                >
                  Sedes
                </Link>
              </li>
              <li>
                <a href="#" className="block px-3 text-secondary">
                  Webinars
                </a>
              </li>
              <li>
                <Link
                  to="/informacion"
                  className="navItem block rounded px-3 text-secondary md:border-0 md:p-0"
                >
                  Información
                </Link>
              </li>
              <li>
                <Button text="¡Contáctanos!" goto="#contact-info" />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
