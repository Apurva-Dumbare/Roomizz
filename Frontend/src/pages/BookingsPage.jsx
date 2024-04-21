 

import AccountNav from "../AccountNav";
import { useEffect, useState } from "react";
import axios from "axios";
import PlaceImg from "../PlaceImg";
import { differenceInCalendarDays, format } from "date-fns";
import { Link } from "react-router-dom";
import BookingDates from "../BookingDates";
import { CiMoneyCheck1 } from "react-icons/ci";

export default function BookingsPage() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios.get("/bookings").then((response) => {
      setBookings(response.data);
    });
  }, []);

  return (
    <div className="container mx-auto px-4">
      <AccountNav />
      <div className="mt-8 grid grid-cols-1 text-lg gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {bookings?.length > 0 &&
          bookings.map((booking) => (
            <Link key={booking._id} to="#" className="block">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                <PlaceImg
                  place={booking.place}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl text-blue-500 font-semibold mb-2">
                    {booking.place.title}
                  </h2>
                  <div className="text-gray-700 mb-2">
                    <BookingDates booking={booking} />
                  </div>
                  <div className="flex items-center ">
                    <CiMoneyCheck1 className="mr-1" />
                    Total price: ${booking.price}
                  </div>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
