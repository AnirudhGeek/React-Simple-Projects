import React from "react";
import brand from "../assets/brand_logo.png";

const Navbar = () => {
  return (
    <div className="px-10 h-18 flex justify-between items-center">
      <img className="cursor-pointer" src={brand} alt="nike image" />
      <div className="flex justify-center gap-2.5 w-fit font-semibold text-base">
        <div className="cursor-pointer">MENU</div>
        <div className="cursor-pointer">LOCATION</div>
        <div className="cursor-pointer">ABOUT</div>
        <div className="cursor-pointer">CONTACT</div>
      </div>
      <button className="bg-red-600 px-4 py-1.5 cursor-pointer text-white rounded-md text-center">Login</button>
    </div>
  );
};

export default Navbar;
