import React, { useState } from "react";
import DiceSelectBtn from "./DiceSelectBtn";
import MainComponent from "./MainComponent";

const GamePlay = () => {
    const [isActive,setIsActive] = useState(false)
    function toggleActive(){
        console.log(isActive)
        setIsActive(prev=>!prev)
        console.log(isActive)
    }
  return (
    <div className=" relative flex justify-center items-center">
      <div className="w-fit h-fit mt-16 flex items-center justify-center gap-148.25">
        <div className="w-fit h-fit flex flex-col items-center gap-0.75">
          <h1 className="w-15.5 h-28 font-medium text-[100px]">0</h1>
          <h4 className="w-33.75 h-9 font-medium text-2xl">total score</h4>
        </div>
        <div className="w-fit h-fit flex flex-col gap-7.5 items-end">
            <div className="w-fit h-fit flex gap-6">
                <DiceSelectBtn toggleActive={toggleActive} diceNumber={1}/>
                <DiceSelectBtn toggleActive={toggleActive} diceNumber={2}/>
                <DiceSelectBtn toggleActive={toggleActive} diceNumber={3}/>
                <DiceSelectBtn toggleActive={toggleActive} diceNumber={4}/>
                <DiceSelectBtn toggleActive={toggleActive} diceNumber={5}/>
                <DiceSelectBtn toggleActive={toggleActive} diceNumber={6}/>
            </div>
            <h4 className="w-45.5 h-9 font-bold text-2xl">Select Number</h4>
        </div>
      </div>
      <MainComponent/>
    </div>
  );
};

export default GamePlay;
