import { ReactNode } from "react"

interface Props{
    className?: String,
    children: ReactNode
}

const Container = ({children, className}: Props) =>{

    return(
        <>
            <article className="md:h-screen h-[100svh] xl:pl-16 xl:px-12 flex justify-center">
                <div className={`w-full ${className}`}>
                    {children}
                </div>
            </article>
        </>
    )

}

export default Container