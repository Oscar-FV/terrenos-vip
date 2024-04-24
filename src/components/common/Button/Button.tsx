interface Props {
  text: string;
  type?: string;
  className?: String;
  goto?: string
}

const Button = ({ text, type, className, goto }: Props) => {
  switch (type) {
    case "button-arrow":
      return (
        <a
          className="group relative inline-flex items-center justify-start overflow-hidden rounded py-3 pl-4 pr-12 text-secondary transition-all duration-150 ease-in-out hover:pl-10 hover:pr-6 md:bg-[#f4f4f4]"
          href={goto}
        >
          <span className="absolute bottom-0 left-0 h-1 w-full bg-primary transition-all duration-150 ease-in-out group-hover:h-full"></span>
          <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
            <svg
              className="h-5 w-5 text-accent"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </span>
          <span className="absolute left-0 -translate-x-12 pl-2.5 duration-200 ease-out group-hover:translate-x-0">
            <svg
              className="h-5 w-5 text-accent"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </span>
          <span className="relative w-full text-left text-xl text-white transition-colors duration-200 ease-in-out group-hover:text-white md:text-secondary">
            {text}
          </span>
        </a>
      );
    case "button-secondary":
      return (
        <a
          className={`${className} rounded-lg border-2 border-primary bg-transparent px-3 py-2 text-center text-base text-primary transition-colors duration-200 ease-in-out hover:bg-primary hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 md:text-xl`}
          href={goto}
        >
          {text}
        </a>
      );
    default:
      return (
        <a
          className={`${className} rounded-lg border-2 border-transparent bg-primary px-3 py-2 text-center text-base text-white transition-colors duration-200 ease-in-out hover:bg-secondary focus:outline-none focus:ring-4 focus:ring-blue-300 md:text-xl`}
          href={goto}
        >
          {text}
        </a>
      );
  }
};

export default Button;
