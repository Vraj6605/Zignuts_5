import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { BR } from "../src/components/Assets";

function App() {
  return (
    <div className="relative">
      <Navbar />

      <div className="absolute top-[121px] w-[1426px] h-[789.19px]">
        <Hero />
      </div>

      <div className="absolute top-[650px] left-[1426px] ">
        <img className="h-[207px] w-[249px]" src={BR} />
      </div>
    </div>
  );
}

export default App;
