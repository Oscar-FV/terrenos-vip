import { ReactNode } from "react";

interface Props {
  className?: String;
  children: ReactNode;
  height?: String;
}

const Container = ({ children, className, height }: Props) => {
  return (
    <>
      <article className={`${height} flex justify-center xl:px-12 xl:pl-16`}>
        <div className={`w-full ${className}`}>{children}</div>
      </article>
    </>
  );
};

export default Container;
