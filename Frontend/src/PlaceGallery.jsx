import { useState } from "react";
import Image from "./Image.jsx";
import { IoMdClose } from "react-icons/io";
import { GrGallery } from "react-icons/gr";

export default function PlaceGallery({ place }) {
  const [showAllPhotos, setShowAllPhotos] = useState(false);

  if (showAllPhotos) {
    return (
      <div className="absolute inset-0  mt-36 bg-black  text-white h-[600px]   rounded-2xl    m-2 ">
        <div className=" w-[100%] text-white   pt-6 pl-6">
          <h2 className="text-3xl">Photos of {place.title}</h2>
          <button
            onClick={() => setShowAllPhotos(false)}
            className="fixed right-12 top-16 items-center flex gap-1 py-2 px-4 rounded-2xl shadow shadow-black bg-white text-black"
          >
            <IoMdClose size={25} />
            Close photos
          </button>
        </div>
        <div className="bg-black p-8 mt-4  flex flex-col scrollbar-hide rounded-2xl gap-4 md:w-full md:overflow-x-auto md:flex-row overflow-auto h-[500px]   md:h-[600px]   ">
          {place?.photos?.length > 0 &&
            place.photos.map((photo, index) => (
              <div key={index} className="flex-none mt-4">
                <Image
                  className="  object-cover md:object-fill h-[500px] w-[450px] md:w-[700px] mt-4  rounded-lg "
                  src={photo}
                  alt={`Image${index}`}
                />
              </div>
            ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="grid gap-2 grid-cols-[2fr_1fr] rounded-3xl overflow-hidden">
        <div>
          {place.photos?.[0] && (
            <div>
              <Image
                onClick={() => setShowAllPhotos(true)}
                className="aspect-square cursor-pointer object-cover"
                src={place.photos[0]}
                alt=""
              />
            </div>
          )}
        </div>
        <div className="grid">
          {place.photos?.[1] && (
            <Image
              onClick={() => setShowAllPhotos(true)}
              className="aspect-square cursor-pointer object-cover"
              src={place.photos[1]}
              alt=""
            />
          )}
          <div className="overflow-hidden">
            {place.photos?.[2] && (
              <Image
                onClick={() => setShowAllPhotos(true)}
                className="aspect-square cursor-pointer object-cover relative top-2"
                src={place.photos[2]}
                alt=""
              />
            )}
          </div>
        </div>
      </div>
      <button
        onClick={() => setShowAllPhotos(true)}
        className="flex gap-4 absolute bottom-2 items-center right-2 py-2 px-4 bg-white rounded-2xl   shadow-md shadow-gray-500"
      >
        <GrGallery />
        Show more photos
      </button>
    </div>
  );
}
