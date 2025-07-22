import React from "react";
import flipkart from '../assets/flipkart.png'
import amazon from '../assets/amazon.png'

const Footer = () => {
  return (
    <div>
      <div>Also Available On</div>
      <div className="flex  items-center w-20 h-8 justify-between">
        <img className="cursor-pointer" src={flipkart} alt="" />
        <img className="cursor-pointer" src={amazon} alt="" />
      </div>
    </div>
  );
};

export default Footer;
