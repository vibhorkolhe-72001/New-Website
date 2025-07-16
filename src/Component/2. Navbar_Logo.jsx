import React, { useState, useEffect } from "react";
import logo from "../assets/10001.png";

function Navbar_Logo() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      let hours = now.getHours();
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");
      const ampm = hours >= 12 ? "PM" : "AM";

      hours = hours % 12 || 12; // Convert to 12-hour format
      const formattedTime = `${hours}:${minutes}:${seconds} ${ampm}`;
      setTime(formattedTime);
    };

    updateClock(); // Set time immediately
    const interval = setInterval(updateClock, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="relative h-40 w-full flex flex-col items-center justify-center gap-2 max-md:hidden">
      <div className="w-[60%] h-full  flex items-center md:w-full lg:w-[80%] xl:w-[60%]">
        <div>
          <img src={logo} alt="" />
        </div>
      </div>
      <div className="w-full h-28  flex justify-center items-center border-1 border-gray-200 bg-gray-100">
        <div className="w-[60%] h-full flex items-center justify-between px-2 md:w-full lg:w-[80%] xl:w-[60%]">
          <div>
            <ul className="flex gap-8">
              <li>Home</li>
              <li>Pages</li>
              <li>Videos</li>
              <li>Mega Menu</li>
              <li>Politics</li>
              <li>Business</li>
              <li>Sports</li>
            </ul>
          </div>
          <div>
            <button className="border-1 px-4 py-2 font-medium bg-[#D32F2F] text-white text-[15px]">
              {time}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar_Logo;
