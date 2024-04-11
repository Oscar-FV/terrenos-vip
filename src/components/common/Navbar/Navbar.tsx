import { useEffect, useRef, useState } from "react"
import useOnClickOutside from "../../../hooks/useOnClickOutside"
import Button from "../Button/Button"
import Hamburger from 'hamburger-react'
import "./Navbar.css"

const Navbar = () => {
    const navRef = useRef(null);
    const [isOpen, setOpen] = useState(false)

    useOnClickOutside(navRef, () => {
        if(isOpen){
            setOpen(false)
        }
    });

    useEffect(() => {
        const menu = document.getElementById("mobile-menu")
        if (menu)
            if (isOpen) {
                menu.classList.replace("nav-closed", "nav-open")
            } else {
                menu.classList.replace("nav-open", "nav-closed")
            }
    }, [isOpen]);

    return (
        <>
            <nav ref={navRef} className="bg-white border-gray-200 shadow-sm fixed w-full top-0 z-50 lg:px-12 lg:py-2 2xl:p-0">
                <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto py-4 px-4 lg:p-4">
                    <a href="" className="flex items-center space-x-3 pl-4">
                        <img src="/images/logo.webp" className="h-8" alt="terrenos VIP ciudad maderas" />
                        <span className="sm:text-3xl font-semibold whitespace-nowrap text-accent h-7">TERRENOS <span className="text-primary">VIP</span></span>
                    </a>
                    <span className="lg:hidden">
                        <Hamburger toggled={isOpen} toggle={setOpen} size={20} color="#003764"/>
                    </span>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="text-lg flex items-center flex-col md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
                            <li>
                                <a href="#" className="block px-3 text-secondary rounded md:border-0 md:p-0 navItem">Sedes</a>
                            </li>
                            <li>
                                <a href="#" className="block px-3 text-secondary rounded md:border-0 md:p-0 navItem">Información</a>
                            </li>
                            <li>
                                <a href="#" className="block px-3 text-secondary rounded md:border-0 md:p-0 navItem">Webinars</a>
                            </li>
                            <li>
                                <Button size="lg" text="¡Contáctanos!" />
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="bg-white nav-open lg:hidden" id="mobile-menu">
                    <div className="h-full flex justify-center items-center" id="navbar-default">
                        <ul className="text-lg flex items-center flex-col gap-y-3 pb-5">
                            <li>
                                <a href="#" className="block px-3 text-secondary">Sedes</a>
                            </li>
                            <li>
                                <a href="#" className="block px-3 text-secondary">Webinars</a>
                            </li>
                            <li>
                                <a href="#" className="block px-3 text-secondary">Información</a>
                            </li>
                            <li>
                            <Button text="¡Contáctanos!" />
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    );
}

export default Navbar;