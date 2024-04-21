import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
// import BookingWidget from "../BookingWidget";
import PlaceGallery from "../PlaceGallery";
import AddressLink from "../AddressLink";

import { CiWifiOn } from "react-icons/ci";
import { FaCarSide } from "react-icons/fa";
import { MdOutlinePets, MdOutlineRadio } from "react-icons/md";
import { PiTelevisionBold } from "react-icons/pi";
import { GiEntryDoor } from "react-icons/gi";

export default function PlacePage() {
  const { id } = useParams();
  const [place, setPlace] = useState(null);

  useEffect(() => {
    window.scrollTo({
      top: 70,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get(`/places/${id}`).then((response) => {
      setPlace(response.data);

      console.log(response.data);
    });
  }, [id]);

  if (!place) return "";

  return (
    <div className="flex flex-col md:flex-row gap-4 mt-10 ">
      <div className="mt-4 bg-gray-200 m-auto rounded-xl pb-4  px-4  pt-2  ">
        <h1 className="text-3xl text-blue-500 ">{place.title}</h1>
        <AddressLink>{place.address}</AddressLink>
        <div className="mt-8 mb-8 grid gap-8  ">
          <div>
            <div className=" ">
              <h2 className="font-semibold text-blue-500 pb-4 text-2xl">
                Description
              </h2>
              {place.description}
            </div>
          </div>
        </div>

        <p className="text-2xl text-blue-500">Perks</p>
        <div className=" flex  flex-row md:gap-20 ">
          <div className=" flex flex-col md:flex-row   ">
            <p className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
              <CiWifiOn size={30} />
              <span className="ml-2">Wifi</span>
            </p>
            <p className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
              <FaCarSide size={30} />
              <span className="ml-2">Free parking</span>
            </p>
            <p className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
              <PiTelevisionBold size={25} />
              <span className="ml-2">TV</span>
            </p>
          </div>
          <div className=" flex flex-col md:flex-row   ">
            <p className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
              <MdOutlineRadio size={25} />
              <span className="ml-2">Radio</span>
            </p>
            <p className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
              <MdOutlinePets size={25} />
              <span className="ml-2">Pets</span>
            </p>
            <p className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
              <GiEntryDoor size={35} />
              <span className="ml-2">Private entrance</span>
            </p>
          </div>
        </div>
        <div className=" rounded-lg    border-t ">
          <p className="font-semibold pb-3 text-blue-500  text-2xl">
            Extra info
          </p>

          <div className="mb-4  text-sm text-gray-700 leading-5">
            {place.extraInfo}
          </div>
        </div>
      </div>

      <div>
        <PlaceGallery place={place} />
      </div>
    </div>
  );
}
