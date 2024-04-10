interface Props {
    size?: string,
    text: string,
    type?: string
}

const Button = ({ size = "base", text, type }: Props) => {
    let buttonClass = "";

    switch (size) {
        case "xs":
            buttonClass = "text-xs";
            break;
        case "sm":
            buttonClass = "text-sm";
            break;
        case "base":
            buttonClass = "text-base";
            break;
        case "lg":
            buttonClass = "text-lg";
            break;
        case "xl":
            buttonClass = "text-xl";
            break;
        default:
            buttonClass = "text-base";
            break;
    }

    switch (type) {
        case ("unveil"):
            return (
                <a
                    href=""
                    className={`group relative inline-block font-mono ${buttonClass}`}
                >
                    <span className="relative z-10 block overflow-hidden rounded-lg border border-secondary px-5 py-3 font-medium leading-tight text-secondary transition-colors duration-300 ease-out group-hover:border-transparent group-hover:text-white">
                        <span className="absolute inset-0 h-full w-full rounded-lg bg-white px-5 py-3"></span>
                        <span className="ease absolute left-0 -ml-2 h-48 w-48 origin-top-right -translate-x-full translate-y-12 -rotate-90 bg-gradient-to-br from-primary to-secondary transition-all duration-300 group-hover:-rotate-180"></span>
                        <span className="relative">{text}</span>
                    </span>
                    <span className="absolute bottom-0 right-0 -mb-1 -mr-1 h-12 w-full rounded-lg bg-secondary transition-all duration-200 ease-linear group-hover:mb-0 group-hover:mr-0 group-hover:bg-transparent" data-rounded="rounded-lg"></span>
                </a>
            );
        default:
            return (
                <a
                    href=""
                    className={`px-3 py-2 bg-primary hover:bg-secondary text-white focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center transition-colors duration-200 ease-in-out ${buttonClass}`}
                >
                    {text}
                </a>
            );
    }


}

export default Button;