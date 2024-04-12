import { ReactNode } from "react"

interface Props{
    className?: String,
    children: ReactNode
}

const Container = ({children, className}: Props) =>{

    return(
        <>
            <section className="h-screen xl:pl-16 xl:px-12 flex justify-center">
                <div className={`max-w-screen-2xl w-full ${className}`}>
                    {children}
                </div>
            </section>
        </>
    )

}

export default Container