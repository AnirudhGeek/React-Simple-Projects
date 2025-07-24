import React, { useState } from "react";
import "./App.css";
import StartGame from "./components/StartGame";
import GamePlay from "./components/GamePlay";

const App = () => {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };
  return <div className="font-poppins">{isGameStarted ? <GamePlay /> : <StartGame toggle= {toggleGamePlay}/>}</div>;
};

export default App;
