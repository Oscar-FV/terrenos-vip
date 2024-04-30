import Container from "../common/Container/Container";

const VenueListing = () => {
  return (
    <>
      <Container
        className=" mt-28 grid grid-cols-2 items-end gap-x-4 md:px-16 xl:p-0"
        height="h-[100vh]"
      >
        <article className="flex h-screen w-full">
          <div className="h-auto overflow-y-scroll">
            <div className="mb-4 flex flex-col gap-x-4 overflow-hidden rounded-lg p-2 lg:flex-row">
              <figure className="w-full max-w-[full] lg:max-w-[16rem]">
                <img
                  src="/images/aguascalientes.webp"
                  alt=""
                  className="aspect-auto h-full w-full rounded-lg"
                />
              </figure>
              <figcaption className="mt-1 text-secondary">
                <h3 className="font-bold leading-none text-primary md:text-[3cqb]">
                  Aguascalientes,{" "}
                  <span className="font-light text-secondary md:text-[2cqb]">
                    Aguascalientes
                  </span>
                </h3>
                <p className="mt-2">
                  Invierte en el Bajío, en un estado propicio para disfrutar de
                  cada día y de sus atractivos. Además, de asegurar mayor
                  calidad de vida.
                </p>
                <p className="mt-3">
                  Mesualidades Desde{" "}
                  <strong className="text-primary">$1,915 MXN</strong>
                </p>
              </figcaption>
            </div>
            <div className="mb-4 flex w-full overflow-hidden rounded-lg bg-primary/10 p-2 shadow-md">
              <figure className="w-full max-w-[30%]">
                <img
                  src="/images/merida.webp"
                  alt=""
                  className="aspect-auto rounded-lg"
                />
              </figure>
            </div>
          </div>
        </article>

        <figure className="h-full w-full border border-blue-600"></figure>
      </Container>
    </>
  );
};
export default VenueListing;
