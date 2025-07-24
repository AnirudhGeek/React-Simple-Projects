import React from "react";

const Rules = () => {
  return (
    <div className="bg-[#FBF1F1] w-fit h-fit top-[776px] left-[338px] p-5 flex flex-col gap-6 mt-2">
      <div className="w-70 h-9 font-bold text-2xl">
        <h3>How to play dice game</h3>
      </div>
      <div className="w-fit h-fit flex flex-col gap-1 font-medium text-base">
        <div>Select any number</div>
        <div>Click on dice image</div>
        <div>
          after click on dice if selected number is equal to dice number you
          will get same point as dice
        </div>
        <div>if you get wrong guess then 2 point will be dedcuted</div>
      </div>
    </div>
  );
};

export default Rules;
