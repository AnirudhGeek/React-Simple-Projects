import React, { useState } from "react";
import "./App.css";
import NumberSelector from "./components/NumberSelector";
import Dice from "./components/Dice";
import Scorecard from "./components/Scorecard";

const App = () => {
  const [selectedNumber, setSelectedNumber] = useState(0);
  const [diceValue, setDiceValue] = useState(1);
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState("");

  // Logic to handle dice roll and scoring
  function handleRollDice() {
    if (selectedNumber === 0) {
      setMessage("Please select a number first");
      return;
    }
    setMessage("");
    const num = Math.floor(Math.random() * 6) + 1;
    setDiceValue(num);

    if (selectedNumber === num) {
      setScore((prev) => prev + num);
      setMessage(`🎉 Correct! +${num} points.`);
    } else {
      setScore((prev) => prev - 2);
      setMessage("Wrong! -2 points.");
    }
  }

  return (
    <div>
      <NumberSelector
        selectedNumber={selectedNumber}
        setSelectedNumber={setSelectedNumber}
        message={message}
      />
      <Dice diceValue={diceValue} onRoll={handleRollDice} />
      <Scorecard score={score} />
    </div>
  );
};

export default App;
