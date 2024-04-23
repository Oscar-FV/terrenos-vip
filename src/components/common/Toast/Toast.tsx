import { Icon } from "@iconify/react/dist/iconify.js";

interface Props {
  status: number;
}

const Toast = ({ status }: Props) => {
  let style: string = "";
  let icon: string = "";
  switch (status) {
    case 200:
      style = "bg-green-100 text-green-500";
      icon = "lets-icons:check-fill";
      break;
    case 400:
      style = "text-red-500 bg-red-100";
      icon = "lets-icons:close-square-fill";
      break;
  }

  return (
    <div
      id="toast-success"
      className="absolute top-[60%] z-20 mb-4 flex w-full max-w-xs animate-fade-right items-center rounded-lg bg-white p-4 text-gray-500 shadow  animate-ease-in-out md:top-[80%]"
      role="alert"
    >
      <div className={`inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg ${style}`}>
        <Icon icon={icon} className="h-5 w-5" />
      </div>
      <div className="ms-3 text-sm font-normal">Item moved successfully.</div>
      <button
        type="button"
        className="-mx-1.5 -my-1.5 ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-900 focus:ring-2 focus:ring-gray-300"
        data-dismiss-target="#toast-success"
        aria-label="Close"
      >
        <span className="sr-only">Close</span>
        <svg
          className="h-3 w-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
      </button>
    </div>
  );
};

export default Toast;
