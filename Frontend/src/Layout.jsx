import Header from "./Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <div className="py-4 px-8 flex flex-col min-h-screen overflow-scroll scrollbar-hide  mx-auto   ">
        <Header />
        <Outlet />
      </div>
      <div className=" "></div>
    </>
  );
}
