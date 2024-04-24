const Footer = () => {
  return (
    <footer className="bg-accent/30">
      <div className="mx-auto w-full max-w-screen-2xl p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="#"
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
          </a>
          <ul className="mb-6 flex flex-wrap items-center text-sm font-medium text-secondary sm:mb-0">
            <li>
              <a href="#" className="me-4 hover:underline md:me-6">
                ¿Cómo Funciona?
              </a>
            </li>
            <li>
              <a href="#" className="me-4 hover:underline md:me-6">
                Sedes Destacadas
              </a>
            </li>
            <li>
              <a href="#" className="me-4 hover:underline md:me-6">
                Nuestras Sedes
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contacto
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center">
          © 2024{" "}
          <a href="https://www.facebook.com/Terrenosvipenmexico" className="hover:underline">
            Terrenos VIP.
          </a>
        </span>
        <span className="block text-sm text-gray-500 sm:text-center">
          Made by{" "}
          <a href="https://www.linkedin.com/in/oscar-fv/" className="hover:underline underline md:no-underline">
            OFV 👾
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer