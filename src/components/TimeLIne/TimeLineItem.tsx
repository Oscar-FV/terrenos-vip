import { Icon } from "@iconify/react/dist/iconify.js"

interface Props {
    icon: string,
    tittle: string,
    text: string,
    direction: string
}

const TimeLineItem = ({icon, tittle, text, direction}:Props) => {

    let justify: string = ""
    let justify_icon = ""
    switch(direction){
        case "left":
            justify = "md:justify-start";
            justify_icon = "right-[-100px]"
            break;
        case "right":
            justify = "md:justify-end";
            justify_icon = "left-[-100px]"
            break;
    }

    return (
        <>
            <li className="hidden md:block absolute h-[70%] w-1 bg-white left-[50%] top-[20px] translate-x-[-50%]">
            </li>
            <li className={`flex ${justify} mb-6`}>
                <section className="relative md:block flex gap-x-4 md:item-content md:p-[20px] z-10">
                    <Icon icon={icon} className={`md:absolute text-secondary bg-white rounded-[50%] sm:h-20 h-14 sm:w-20 w-14 p-3 ${justify_icon}`}  />
                    <div className="w-[100%]">
                        <h3 className="timeline-tittle font-bold capitalize md:mt-2">{tittle}</h3>
                        <p className="font-light timeline-text mt-2">{text}</p>
                    </div>
                </section>
            </li>
        </>
    )

}

export default TimeLineItem
