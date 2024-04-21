// import { Link } from "react-router-dom";
// import AccountNav from "../AccountNav";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import PlaceImg from "../PlaceImg";
// import { FiEdit3 } from "react-icons/fi";
// import { MdDelete } from "react-icons/md";
// import { CiCirclePlus } from "react-icons/ci";
// export default function PlacesPage() {
//   const [places, setPlaces] = useState([]);
//   const [checkdelete, setCheckdelete] = useState(false);
//   const handleClick = (placeid, owner) => {
//     // console.log(placeid, owner);

//     axios.post(`/user-places/${placeid}`, { placeid, owner }).then((data) => {
//       // console.log(data.status);
//       if (data) {
//         setCheckdelete(true);
//       }
//     });
//   };
//   useEffect(() => {
//     axios.get("/user-places").then(({ data }) => {
//       setPlaces(data);

//       console.log(data);
//     });
//   }, [checkdelete]);

//   return (
//     <div>
//       <AccountNav />
//       <div className="text-center">
//         <Link
//           className="inline-flex gap-8 bg-cyan-600 items-center text-black font-semibold py-2 px-6 rounded-full"
//           to={"/account/places/new"}
//         >
//           <CiCirclePlus size={25} />
//           Add Post
//         </Link>
//       </div>
//       <div className=" ">
//         {places.length > 0 &&
//           places.map((place) => (
//             <div key={place._id} className=" ">
//               <div className="   ">
//                 <div className=" ">
//                   <PlaceImg place={place} />
//                 </div>

//                 <div className="  ">
//                   <h2 className=" ">{place.address}</h2>
//                   <h2 className=" ">{place.title}</h2>
//                   <p className=" ">{place.description}</p>
//                   <p className=" ">{place.price}</p>
//                 </div>
//               </div>
//               <div className=" first-letter:">
//                 <Link to={"/account/places/" + place._id}>
//                   <FiEdit3 size={"30px"} />
//                 </Link>
//                 <MdDelete
//                   size={"30px"}
//                   onClick={(ev) => handleClick(place._id, place.owner)}
//                 />
//               </div>
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// }

import { Link } from "react-router-dom";
import AccountNav from "../AccountNav";
import { useEffect, useState } from "react";
import axios from "axios";
import PlaceImg from "../PlaceImg";
import { FiEdit3 } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { CiCirclePlus } from "react-icons/ci";

export default function PlacesPage() {
  const [places, setPlaces] = useState([]);
  const [checkdelete, setCheckdelete] = useState(false);

  const handleClick = (placeid, owner) => {
    axios.post(`/user-places/${placeid}`, { placeid, owner }).then((data) => {
      if (data) {
        setCheckdelete(true);
      }
    });
  };

  useEffect(() => {
    axios.get("/user-places").then(({ data }) => {
      setPlaces(data);
    });
  }, [checkdelete]);

  return (
    <div className="flex flex-col items-center justify-center">
      <AccountNav />
      <div className="text-center my-4">
        <Link
          className="inline-flex gap-8 bg-blue-500 text-white font-semibold py-2 px-6 rounded-full items-center shadow-md"
          to={"/account/places/new"}
        >
          <CiCirclePlus size={25} />
          Add Post
        </Link>
      </div>
      <div className=" border-2 p-2 gap-6">
        {places.length > 0 &&
          places.map((place) => (
            <div key={place._id} className="bg-white rounded-lg ">
              <div>
                <PlaceImg place={place} />
              </div>
              <div className="p-4">
                <h2 className="text-blue-500 text-xl font-semibold">
                  {place.address}
                </h2>
                <h2 className="text-lg font-semibold">{place.title}</h2>
                <p className="text-gray-700">{place.description}</p>
                <p className="text-blue-500 font-semibold">${place.price}</p>
              </div>
              <div className="flex justify-end p-4">
                <Link to={"/account/places/" + place._id}>
                  <FiEdit3 size={30} className="text-blue-500 mr-4" />
                </Link>
                <MdDelete
                  size={30}
                  className="text-blue-500 cursor-pointer"
                  onClick={(ev) => handleClick(place._id, place.owner)}
                />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
