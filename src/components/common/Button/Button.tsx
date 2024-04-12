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
        case ("button-arrow"):
            return (
                <a href="#_" className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden text-secondary transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 md:bg-[#f4f4f4] group">
                    <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-primary group-hover:h-full"></span>
                    <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                        <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                        <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <span className="md:text-secondary text-white relative w-full text-left text-xl transition-colors duration-200 ease-in-out group-hover:text-white">{text}</span>
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