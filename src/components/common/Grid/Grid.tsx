import "./Grid.css";
import video from "../../../assets/images/peninsula.mp4";

const Grid = () => {
  return (
    <>
      <div className="h-full w-full bg-black md:mt-20 md:grid md:h-auto md:auto-rows-[200px] md:grid-cols-4 md:gap-[16px] md:bg-transparent">
        <img
          src="/images/desarrollo-caribe.webp"
          className="gallery-img col-span-3 col-start-2 hidden animate-fade-left border border-gray-100 shadow-md animate-delay-100 md:block"
          alt=""
        />
        <video
          src={video}
          playsInline
          autoPlay
          muted
          loop
          className="gallery-img opacity-35 md:col-span-3 md:row-span-2 md:animate-fade-down md:border md:border-gray-100 md:opacity-100 md:shadow-md md:animate-delay-200"
        ></video>
        <img
          src="/images/flamingos.webp"
          className="gallery-img row-span-2 hidden animate-fade-up border border-gray-100 shadow-md animate-delay-150 md:block"
          alt=""
        />
      </div>
    </>
  );
};

export default Grid;
