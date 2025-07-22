import React from "react";
import shoe from "../assets/shoe_image.png";
import Footer from "./Footer";

const Hero = () => {
  return (
    <div className=" h-153.25 flex justify-between items-center py-38 pl-39.25">
      <div className="w-168.75 h-153.25 flex flex-col justify-center gap-6">
        <div className="font-extrabold text-8xl w-148.75 h-76.5 leading-22.5 text-[#000000]">
          YOUR FEET DESERVE THE BEST
        </div>
        <div className="text-base font-semibold text-[#5A5959] w-101 h-22.75  ">
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </div>
        <div className="w-82.75 h-10.25 flex justify-center gap-10 text-2xl">
          <button className="py-1.5 bg-[#D01C28] cursor-pointer rounded-md px-2 text-center text-white">
            Shop Now
          </button>
          <button className="py-1.5 cursor-pointer border border-solid rounded-md border-black px-2 text-center">
            Category
          </button>
        </div>
        <Footer />
      </div>
      <img className="w-132.25 h-121.765 " src={shoe} alt="shoe image" />
    </div>
  );
};

export default Hero;
