import { CiWifiOn } from "react-icons/ci";
import { FaCarSide } from "react-icons/fa";
import { MdOutlinePets, MdOutlineRadio } from "react-icons/md";
import { PiTelevisionBold } from "react-icons/pi";
import { GiEntryDoor } from "react-icons/gi";

export default function Perks({ selected, onChange }) {
  function handleCbClick(ev) {
    const { checked, name } = ev.target;
    if (checked) {
      onChange([...selected, name]);
    } else {
      onChange([...selected.filter((selectedName) => selectedName !== name)]);
    }
  }
  return (
    <>
      <label className="border p-4 flex md:flex-col rounded-2xl gap-2 items-center cursor-pointer">
        <input
          type="checkbox"
          checked={selected.includes("wifi")}
          name="wifi"
          onChange={handleCbClick}
        />
        <CiWifiOn size={30} />
        <span>Wifi</span>
      </label>
      <label className="border p-4 flex md:flex-col rounded-2xl gap-2 items-center cursor-pointer">
        <input
          type="checkbox"
          checked={selected.includes("parking")}
          name="parking"
          onChange={handleCbClick}
        />
        <FaCarSide size={30} />

        <span>Free parking</span>
      </label>
      <label className="border p-4 flex  md:flex-col rounded-2xl gap-2 items-center cursor-pointer">
        <input
          type="checkbox"
          checked={selected.includes("tv")}
          name="tv"
          onChange={handleCbClick}
        />

        <PiTelevisionBold size={25} />

        <span>TV</span>
      </label>
      <label className="border p-4 flex  md:flex-col rounded-2xl gap-2 items-center cursor-pointer">
        <input
          type="checkbox"
          checked={selected.includes("radio")}
          name="radio"
          onChange={handleCbClick}
        />
        <MdOutlineRadio size={25} />

        <span>Radio</span>
      </label>
      <label className="border p-4 flex md:flex-col rounded-2xl gap-2 items-center cursor-pointer">
        <input
          type="checkbox"
          checked={selected.includes("pets")}
          name="pets"
          onChange={handleCbClick}
        />
        <MdOutlinePets size={25} />

        <span>Pets</span>
      </label>
      <label className="border  p-2 flex  md:flex-col rounded-2xl gap-2 items-center cursor-pointer">
        <input
          type="checkbox"
          checked={selected.includes("entrance")}
          name="entrance"
          onChange={handleCbClick}
        />
        <GiEntryDoor size={30} />

        <span className=" truncate">Pvt entrance</span>
      </label>
    </>
  );
}
