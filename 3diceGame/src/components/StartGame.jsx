import React from 'react'
import manyDice from "../assets/manyDice.png";


const StartGame = ({toggle}) => {
  return (
    <div className="w-360 h-214">
      <div className="w-fit h-fit mt-45 ml-32.25  flex items-center font-poppins">
        <img
          className="w-150.25 h-106 object-cover "
          src={manyDice}
          alt="many dice"
        />
        <div className="w-fit h-fit flex flex-col items-end gap-2.5 justify-center ">
          <h1 className="w-132 h-36 font-bold text-8xl border-transparent">DICE GAME</h1>
          <button onClick={toggle} className="bg-black text-white w-55 h-fit px-4.5 py-2.5 rounded-[5px] border hover:bg-white hover:text-black hover:border hover:ease-in-out cursor-pointer">
            Play now
          </button>
        </div>
      </div>
    </div>
  );
}

export default StartGame
