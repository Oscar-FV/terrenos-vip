import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import Navbar from "../components/common/Navbar/Navbar";
import Footer from "../components/common/Footer/Footer";
import { useLayoutEffect } from "react";

export default function Root() {

  const { pathname } = useLocation()
       useLayoutEffect(() => {
          window.scrollTo(0, 0)
       }, [pathname])

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer/>
      <ScrollRestoration />
    </>
  );
}
