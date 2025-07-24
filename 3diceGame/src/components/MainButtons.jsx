import React, { useState } from "react";

const MainButtons = ({ val ,toggle}) => {
  return (
    <div>
      <div>
        <button
          onClick={toggle}
          className={`w-55 h-11 rounded border px-4.5 py-2.5 cursor-pointer hover:ease-in duration-200 ${
            val === "Show Rules"
              ? "bg-black text-white hover:bg-white hover:text-black "
              : "hover:bg-black hover:text-white"
          }`}
        >
          {val}
        </button>
      </div>
    </div>
  );
};

export default MainButtons;
