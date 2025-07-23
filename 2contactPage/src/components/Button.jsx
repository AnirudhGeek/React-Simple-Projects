import React from "react";

const Button = ({ isBlack, buttonLogo,buttonText }) => {
  return (
    <div>
      <button
        className={`cursor-pointer w-55 h-fit rounded-md px-4.5 py-2.5 flex justify-center gap-2.5 ${
          isBlack ? "bg-black text-white" : "w-118 h-fit rounded-md border px-4.5 py-2.5 flex justify-center items-center gap-2.5"
        }`}
      >
        {buttonLogo}
        <h5 className="font-semibold text-base">{buttonText}</h5>
      </button>
    </div>
  );
};

export default Button;
