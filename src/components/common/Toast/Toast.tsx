import { Icon } from "@iconify/react/dist/iconify.js";

interface Props {
  status: number;
}

const Toast = ({ status }: Props) => {
  let style: string = "";
  let icon: string = "";
  let text: string = "";
  switch (status) {
    case 200:
      style = "bg-green-100 text-green-500";
      icon = "lets-icons:check-fill";
      text = "¡Email mandado correctamente!"
      break;
    case 400:
      style = "text-red-500 bg-red-100";
      icon = "lets-icons:close-square-fill";
      text = "Hubo un error al enviar el correo, intentalo de nuevo"
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
      <div className="ms-3 text-sm font-normal">{text}</div>
    </div>
  );
};

export default Toast;
