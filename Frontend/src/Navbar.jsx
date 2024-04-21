import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./UserContext.jsx";
import { IoIosMenu } from "react-icons/io";

export default function Header() {
  const { user } = useContext(UserContext);

  return (
    <header className="flex justify-between  md:px-12 ">
      <Link to={"/"} className="flex items-center gap-1">
        <span className="font-bold text-xl text-cyan-600">Rooomiz </span>
      </Link>

      <div className="hidden md:flex gap-8 text-xl text-cyan-600  font-semibold items-center ">
        <Link to={"/"}>Home</Link>
        <Link to={"/all"}>All Posting</Link>
        <Link to={"/"}>Support</Link>
        <Link to={"/"}>Contact</Link>
      </div>

      <Link
        to={user ? "/account" : "/login"}
        className="flex items-center gap-2 border border-gray-300 rounded-full py-2 px-4 "
      >
        <IoIosMenu size={25} />

        <div className="bg-gray-500 text-white rounded-full border border-gray-500 overflow-hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 relative top-1"
          >
            <path
              fillRule="evenodd"
              d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        {!!user && (
          <div className=" text-sm text-cyan-600   md:text-xl">{user.name}</div>
        )}
      </Link>
    </header>
  );
}
