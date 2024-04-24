import { Icon } from "@iconify/react/dist/iconify.js";

interface Props {
  icon: string;
  tittle: string;
  text: string;
  goto: string;
  iconClassName?: string;
}

const ContactItem = ({ icon, iconClassName, tittle, text, goto }: Props) => {
  return (
    <a href={goto} target="_blank" rel="noopener noreferrer" className="lg:w-full sm:w-[calc(90%/3)] grow lg:grow-0">
      <div className="flex items-center gap-x-2 lg:gap-x-4">
        <Icon
          icon={icon}
          className={`h-8 w-8 text-white lg:h-12 lg:w-12 lg:text-primary ${iconClassName}`}
        />
        <span className="text-[2cqb] font-semibold leading-none text-white lg:text-[5cqb] lg:text-primary">
          {tittle}
        </span>
      </div>
      <p className="text-[2cqb] font-light  text-white lg:w-full lg:text-[2.5cqb] lg:text-secondary underline decoration-3">
        {text}
      </p>
    </a>
  );
};

export default ContactItem;
