import Container from "../common/Container/Container";
import VenueItem from "./VenueItem";

const VenueListing = () => {
  return (
    <>
      <Container
        className=" mt-28 grid grid-cols-2 gap-x-4 md:px-16 xl:p-0 mb-10"
        height="h-screen"
      >
        <article className="h-auto w-full overflow-y-scroll pr-2">
            <VenueItem/>
            <VenueItem/>
            <VenueItem/>
            <VenueItem/>
            <VenueItem/>
            <VenueItem/>
        </article>

        <figure className="h-full w-full border border-blue-600">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d323065.9271595519!2d-102.1960558515789!3d21.885426432680667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842a150f1d5ff5d5%3A0xf29d198bed1ac8a!2sCiudad%20Maderas%20Aguascalientes!5e0!3m2!1ses-419!2smx!4v1714520662769!5m2!1ses-419!2smx" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="w-full h-full"></iframe>
        </figure>
      </Container>
    </>
  );
};
export default VenueListing;
