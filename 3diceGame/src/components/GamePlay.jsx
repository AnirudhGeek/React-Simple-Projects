import React from "react";
import DiceSelectBtn from "./DiceSelectBtn";
import MainComponent from "./MainComponent";

const GamePlay = () => {
  return (
    <div className=" relative flex justify-center items-center">
      <div className="w-fit h-fit mt-16 flex items-center justify-center gap-148.25">
        <div className="w-fit h-fit flex flex-col items-center gap-0.75">
          <h1 className="w-15.5 h-28 font-medium text-[100px]">0</h1>
          <h4 className="w-33.75 h-9 font-medium text-2xl">total score</h4>
        </div>
        <div className="w-fit h-fit flex flex-col gap-7.5 items-end">
            <div className="w-fit h-fit flex gap-6">
                <DiceSelectBtn diceNumber={1}/>
                <DiceSelectBtn diceNumber={2}/>
                <DiceSelectBtn diceNumber={3}/>
                <DiceSelectBtn diceNumber={4}/>
                <DiceSelectBtn diceNumber={5}/>
                <DiceSelectBtn diceNumber={6}/>
            </div>
            <h4 className="w-45.5 h-9 font-bold text-2xl">Select Number</h4>
        </div>
      </div>
      <MainComponent/>
    </div>
  );
};

export default GamePlay;
