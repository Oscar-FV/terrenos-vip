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
        <Container height="h-[100vh]" className="pt-44 md:mx-0 mx-8">
            <div ref={ref} data-color={color} data-text={text} className=" h-full">
                <h2 className="font-bold hero-tittle mt-10">¿Cómo Funciona?</h2>
                <h3 className="mt-1 md:text-3xl text-xl">Descubre, elige, contáctanos. ¡Nosotros nos encargamos del resto!</h3>

                <div className="md:mx-32 mt-14 flex justify-center h-full">
                    <ol className="md:relative">
                        <li className="block absolute h-[90%] w-1 bg-white left-[50%] top-[20px] translate-x-[-50%]">
                        </li>
                        <li className="flex justify-start mb-6">
                            <section className="relative item-content p-[20px] z-10">  
                                <Icon icon="mdi:home-search-outline" className="absolute text-secondary bg-white rounded-[50%] h-20 w-20 p-3 right-[-100px]"/>
                                <span>HOLA</span>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, quis voluptatem vitae exercitationem suscipit aut ipsum necessitatibus! Qui voluptate, natus expedita quia similique error dolor ab sunt provident id impedit?
                                </p>
                            </section>
                        </li>
                        <li className="absolute h-[90%] w-1 bg-white left-[50%] top-[20px] translate-x-[-50%]">
                        </li>
                        <li className="flex justify-end mb-6">
                            <section className="absolute item-content p-[20px]">  
                                <Icon icon="mdi:home-search-outline" className="absolute text-secondary bg-white rounded-[50%] h-20 w-20 p-3 left-[-100px]"/>
                                <span>HOLA</span>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, quis voluptatem vitae exercitationem suscipit aut ipsum necessitatibus! Qui voluptate, natus expedita quia similique error dolor ab sunt provident id impedit?</p>
                            </section>
                        </li>
                    </ol>
                </div>
            </div>

        </Container>
    )
})

export default TimeLine