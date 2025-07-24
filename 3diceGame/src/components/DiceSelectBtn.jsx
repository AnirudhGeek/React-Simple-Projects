import React from "react";

const DiceSelectBtn = ({diceNumber}) => {
  return (
    <div className="w-9 h-9 border bg-white text-black flex items-center justify-center cursor-pointer hover:bg-gray-300">
      {diceNumber}
    </div>
  );
};

export default DiceSelectBtn;
