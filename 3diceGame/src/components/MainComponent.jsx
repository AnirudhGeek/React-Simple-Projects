import React, { useState } from "react";
import dice1 from "../assets/1dice.png";
import MainButtons from "./MainButtons";
import Rules from "./Rules";

const MainComponent = () => {
      const [isRules, setIsRules] = useState(false);
      const [isReset, setIsReset] = useState(false);
      function toggle() {
          setIsRules((prev) => !prev);
      }
  return (
    <div className="flex">
    <div className="absolute top-[263px] left-[595px] w-fit h-fit flex flex-col justify-center">
      <div className="w-fit h-fit flex flex-col gap-3.75">
        <div className="w-62.5 h-62.5">
          <img src={dice1} alt="" />
        </div>
        <h4 className="w-57.25 h-9 text-center font-medium text-2xl">
          Click on dice to roll
        </h4>
      </div>
      <div className="w-fit ml-3 h-fit flex flex-col gap-6">
        <MainButtons val={"Reset score"}/>
        <MainButtons val={"Show Rules"} toggle={toggle}/>
      </div>
    </div>
      {isRules ? <Rules/> : ""}
    </div>
  );
};

export default MainComponent;
