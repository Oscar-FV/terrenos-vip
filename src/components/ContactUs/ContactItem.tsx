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
    <div className="md:w-full sm:w-[calc(90%/3)]">
      <div className="flex items-center gap-x-2 md:gap-x-4">
        <Icon
          icon={icon}
          className={`h-8 w-8 text-white md:h-12 md:w-12 md:text-primary ${iconClassName}`}
        />
        <span className="text-[2cqb] font-semibold leading-none text-white md:text-[5cqb] md:text-primary">
          {tittle}
        </span>
      </div>
      <a href={goto} target="_blank" rel="noopener noreferrer" className="text-[2cqb] font-light  text-white md:w-full md:pl-20 md:text-[2.5cqb] md:text-secondary underline decoration-3">
        {text}
      </a>
    </div>
  );
};

export default ContactItem;
