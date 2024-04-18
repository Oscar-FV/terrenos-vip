import { forwardRef } from "react"
import Container from "../common/Container/Container"
import { Icon } from '@iconify/react';
import "./TimeLine.css"

interface Props {
    color: string,
    text: string
}

const TimeLine = forwardRef<HTMLDivElement, Props>(({ color, text }, ref) => {
    return (
        <Container height="h-[100vh]" className="pt-52 md:mx-0 mx-8">
            <div ref={ref} data-color={color} data-text={text} className=" h-full">
                <h2 className="font-bold hero-tittle mt-10">¿Cómo Funciona?</h2>
                <h3 className="mt-1 md:text-3xl text-xl">Descubre, elige, contáctanos. ¡Nosotros nos encargamos del resto!</h3>

                <div className="md:mx-32 mt-10 flex justify-center h-full">
                    <ol className="md:relative w-full">
                        <li className="block absolute h-full w-1 bg-white left-[50%] top-[20px] translate-x-[-50%]">
                        </li>
                        <li className="flex justify-start mb-6">
                            <section className="relative item-content p-[20px] z-10">  
                                <Icon icon="mdi:home-search-outline" className="absolute text-secondary bg-white rounded-[50%] h-20 w-20 p-3 right-[-100px]"/>
                                <h3 className="timeline-tittle font-bold capitalize mt-2">Descubre tu espacio ideal</h3>
                                <p className="font-light timeline-text mt-2">Encuentra el espacio perfecto que te brinde la oportunidad de construir la vida que siempre has imaginado. lore</p>
                            </section>
                        </li>
                        <li className="flex justify-end mb-6 z-10">
                            <section className="relative item-content p-[20px]">  
                                <Icon icon="healthicons:bills-outline" className="absolute text-secondary bg-white rounded-[50%] h-20 w-20 p-3 left-[-100px]"/>
                                <h3 className="timeline-tittle font-bold capitalize mt-2">reserva tu sueño con confianza</h3>
                                <p className="font-light timeline-text mt-2">Bloquea tu terreno o casa ideal con solo $5,000 pesos y asegura tu lugar en el paraíso inmobiliario sin preocuparte por revisiones de buró de crédito.</p>
                            </section>
                        </li>
                        
                        <li className="flex justify-start mb-6">
                            <section className="relative item-content p-[20px] z-10 ">  
                                <Icon icon="bitcoin-icons:sign-outline" className="absolute text-secondary bg-white rounded-[50%] h-20 w-20 p-3 right-[-100px]"/>
                                <h3 className="timeline-tittle font-bold capitalize mt-2">Formaliza tu Compromiso</h3>
                                <p className="font-light timeline-text mt-2">Celebra este emocionante paso hacia la propiedad de tu nuevo hogar y deja que el proceso de realización de tus sueños comience oficialmente.</p>
                            </section>
                        </li>
                    </ol>
                </div>
            </div>

        </Container>
    )
})

export default TimeLine