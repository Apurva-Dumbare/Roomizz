import { FaRegUser } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { IoIosHome } from "react-icons/io";

import { TfiMenuAlt } from "react-icons/tfi";
export default function AccountNav() {
  const { pathname } = useLocation();
  let subpage = pathname.split("/")?.[2];
  if (subpage === undefined) {
    subpage = "profile";
  }
  function linkClasses(type = null) {
    let classes = " flex  gap-4 py-2 px-6  rounded-md  ";
    if (type === subpage) {
      classes += " bg-cyan-600 text-white";
    } else {
      classes += " bg-gray-200";
    }
    return classes;
  }
  return (
    <nav className="w-full flex  flex-col text-lg font-semibold md:flex-row  md:gap-10 justify-center mt-8 gap-2 mb-8">
      <Link
        className={`${linkClasses("profile")} items-center`}
        to={"/account"}
      >
        <FaRegUser />
        User Profile
      </Link>
      <Link
        className={`${linkClasses("bookings")} items-center`}
        to={"/account/bookings"}
      >
        <TfiMenuAlt />
        My bookings
      </Link>
      <Link
        className={` ${linkClasses("places")} items-center`}
        to={"/account/places"}
      >
        <IoIosHome />
        My Posts
      </Link>
    </nav>
  );
}
