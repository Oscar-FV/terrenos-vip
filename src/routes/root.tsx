import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar/Navbar";
import Footer from "../components/common/Footer/Footer";

export default function Root() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer/>
    </>
  );
}
