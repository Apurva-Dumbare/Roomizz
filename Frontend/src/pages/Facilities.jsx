import { CiWifiOn } from "react-icons/ci";
import { FaCarSide } from "react-icons/fa";
import { MdOutlinePets, MdOutlineRadio } from "react-icons/md";
import { PiTelevisionBold } from "react-icons/pi";
import { GiEntryDoor } from "react-icons/gi";

export default function perk() {
  return (
    <>
      <div className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
        <CiWifiOn size={30} />
        <span className="ml-2">Wifi</span>
      </div>
      <div className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
        <FaCarSide size={30} />
        <span className="ml-2">Free parking</span>
      </div>
      <div className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
        <PiTelevisionBold size={25} />
        <span className="ml-2">TV</span>
      </div>
      <div className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
        <MdOutlineRadio size={25} />
        <span className="ml-2">Radio</span>
      </div>
      <div className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
        <MdOutlinePets size={25} />
        <span className="ml-2">Pets</span>
      </div>
      <div className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
        <GiEntryDoor size={35} />
        <span className="ml-2">Private entrance</span>
      </div>
    </>
  );
}
