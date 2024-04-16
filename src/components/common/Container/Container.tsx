import { ReactNode } from "react"

interface Props{
    isFirstSection?: boolean,
    className?: String,
    children: ReactNode
}

const Container = ({children, className, isFirstSection = false}: Props) =>{
    return(
        <>
            <article className={`${ isFirstSection ? "h-[100svh]" : "h-[100vh]" } md:h-screen  xl:pl-16 xl:px-12 flex justify-center`}>
                <div className={`w-full ${className}`}>
                    {children}
                </div>
            </article>
        </>
    )

}

export default Container