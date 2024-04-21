import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Image from "../Image.jsx";
import { UserContext } from "../UserContext.jsx";
import { FaUser } from "react-icons/fa";

export default function AllPosts() {
  const { user } = useContext(UserContext);
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [locationFilter, setLocationFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState("");
  const [filteredPlaces, setFilteredPlaces] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/places");
        setPlaces(response.data);
        setFilteredPlaces(response.data);
        setLoading(false);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleApplyFilter = () => {
    let filtered = places.filter((place) => {
      let withinPriceRange = true;
      let withinLocationRange = true;

      if (priceFilter) {
        const price = parseInt(priceFilter);
        withinPriceRange =
          place.price >= price - 500 && place.price <= price + 500;
      }

      if (locationFilter) {
        withinLocationRange = place.address
          .toLowerCase()
          .includes(locationFilter.toLowerCase());
      }

      return withinPriceRange && withinLocationRange;
    });

    setFilteredPlaces(filtered);
  };

  const handleRemoveFilter = () => {
    setPriceFilter("");
    setLocationFilter("");
    setFilteredPlaces(places);
  };

  const handleLocationFilterChange = (e) => {
    setLocationFilter(e.target.value);
  };

  const handlePriceFilterChange = (e) => {
    setPriceFilter(e.target.value);
  };

  return (
    <div className="flex md:mx-20 flex-col items-center">
      <div className="mt-8 mb-4 flex flex-col md:flex-row gap-4  items-center space-x-4">
        <input
          type="text"
          placeholder="Location"
          value={locationFilter}
          onChange={handleLocationFilterChange}
          className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="number"
          placeholder="Price (max)"
          value={priceFilter}
          onChange={handlePriceFilterChange}
          className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleApplyFilter}
          className="p-2 w-[350px] bg-blue-500 text-white  text-lg rounded-lg focus:outline-none"
        >
          Apply Filter
        </button>
        <button
          onClick={handleRemoveFilter}
          className="p-2 bg-red-500  w-[350px] text-white  text-lg rounded-lg focus:outline-none"
        >
          Remove Filter
        </button>
      </div>
      {loading ? (
        <div className="flex justify-center items-center w-full h-full">
          <div className="spinner"></div>
        </div>
      ) : (
        <div className="w-full grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {filteredPlaces.map((place) => (
            <Link
              key={place._id}
              to={"/place/" + place._id}
              className="mb-4 rounded-lg p-4 shadow-xl border w-full"
            >
              <div className="bg-gray-500 mb-2 shadow-lg rounded-lgl overflow-hidden">
                {place.photos?.[0] && (
                  <Image
                    className="object-cover w-full h-40"
                    src={place.photos?.[0]}
                    alt=""
                  />
                )}
              </div>
              <div className="text-black font-semibold mb-2 p-2 flex items-center gap-2 overflow-hidden">
                <span>
                  <FaUser />
                </span>
                {!!place.owner && (
                  <div className="text-sm md:text-lg">{place.owner.name}</div>
                )}
              </div>
              <h2 className="font-bold">{place.address}</h2>
              <h3 className="text-sm text-gray-500">{place.title}</h3>
              <div>
                <span className="font-bold">₹ {place.price}</span> per month
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
