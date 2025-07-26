import React from 'react';

const Dice = ({ diceValue, onRoll }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 my-10">
      <div className="w-40 h-50 flex items-center justify-center bg-black text-white font-medium text-5xl rounded-md">
        {diceValue}
      </div>
      <button
        onClick={onRoll}
        className="bg-red-300 border w-fit h-fit text-4xl px-3 py-2 rounded cursor-pointer text-gray-200 hover:bg-red-400 transition duration-200 ease-in-out hover:scale-105"
      >
        Roll dice
      </button>
    </div>
  );
};

export default Dice;
