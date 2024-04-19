import "./Grid.css";
import video from "../../../assets/images/peninsula.mp4";

const Grid = () => {
  return (
    <>
      <div className="h-full w-full md:mt-20 md:grid md:h-auto md:auto-rows-[200px] md:grid-cols-4 md:gap-[16px]">
        <div className="overlay absolute h-full w-full bg-black/50 md:hidden"></div>
        <img
          src="/images/desarrollo-caribe.webp"
          className="gallery-img col-span-3 col-start-2 hidden border border-gray-100 shadow-md md:block"
          alt=""
        />
        <video
          src={video}
          playsInline
          autoPlay
          muted
          loop
          className="gallery-img md:col-span-3 md:row-span-2 md:border md:border-gray-100 md:shadow-md"
        ></video>
        <img
          src="/images/flamingos.webp"
          className="gallery-img row-span-2 hidden border border-gray-100 shadow-md md:block"
          alt=""
        />
      </div>
    </>
  );
};

export default Grid;
