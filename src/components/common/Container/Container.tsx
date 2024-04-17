import { ReactNode } from "react"

interface Props{
    isFirstSection?: boolean,
    className?: String,
    children: ReactNode,
    height?: String
}

const Container = ({children, className, isFirstSection = false, height}: Props) =>{
    return(
        <>
            <article className={`${height} xl:pl-16 xl:px-12 flex justify-center`}>
                <div className={`w-full ${className}`}>
                    {children}
                </div>
            </article>
        </>
    )

}

export default Container