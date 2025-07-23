import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Heading from "./components/Heading";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div className=" font-poppins ">
      <Navbar />
      <Heading/>
      <Hero/>
    </div>
  );
};

export default App;
