import "./Grid.css"


const Grid = () => {
    return (
        <>
            <div className="gallery w-full mt-20 gap-[16px]">
                <img src="/images/desarrollo-caribe.webp" className="gallery-img shadow-md border border-gray-100 col-start-2 col-span-3" alt="" />
                <video src="/images/peninsula.mp4" autoPlay muted loop className="gallery-img shadow-md border border-gray-100 col-span-3 row-span-2">
                </video>
                <img src="/images/flamingos.webp" className="gallery-img shadow-md border border-gray-100 row-span-2" alt="" />
                <img src="/images/entrada-desarrollo.webp" className="gallery-img shadow-md border border-gray-100 col-start-3 col-span-2" alt="" />
            </div>
        </>
    )
}

export default Grid