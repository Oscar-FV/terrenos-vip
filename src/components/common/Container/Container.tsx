import { ReactNode } from "react"

interface Props{
    className?: String,
    children: ReactNode
}

const Container = ({children, className}: Props) =>{

    return(
        <>
            <section className="h-screen x-4 p-8 lg:pl-16 lg:px-12 flex justify-center">
                <div className={`max-w-screen-2xl w-full ${className}`}>
                    {children}
                </div>
            </section>
        </>
    )

}

export default Container