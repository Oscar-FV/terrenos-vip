import "./Grid.css"


const Grid = () => {
    return (
        <>
            <div className="md:grid md:grid-cols-4 md:auto-rows-[200px] md:mt-20 md:gap-[16px] w-full h-full md:h-auto">
                <div className="overlay absolute w-full h-full bg-black/25 md:hidden"></div>
                <img src="/images/desarrollo-caribe.webp" className="gallery-img shadow-md border border-gray-100 col-start-2 col-span-3 hidden md:block" alt="" />
                <video src="/images/peninsula.mp4" autoPlay muted loop className="gallery-img md:shadow-md md:border md:border-gray-100 md:col-span-3 md:row-span-2"></video>
                <img src="/images/flamingos.webp" className="gallery-img shadow-md border border-gray-100 row-span-2 hidden md:block" alt="" />
            </div>
        </>
    )
}

export default Grid