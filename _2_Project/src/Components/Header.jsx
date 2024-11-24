import React from "react";
import logo1 from "../assets/logo1.png";

function Headre() {
  return (
    <div className="w-[100%] h-[91.91px] bg-[#21222A] flex justify-start items-center pl-[31.31px] ">
      <div>
        <img src={logo1} alt="" />
      </div>
      <div>
        <h1 className="font-inter font-[700] text-[22.25px] text-[#61DAFB] ml-[10px]">ReactFacts</h1>
      </div>
    </div>
  );
}

export default Headre;

// width: 122.39px;
// height: 22.25px;
// top: 31px;
// left: 61.61px;
// gap: 0px;
// opacity: 0px;
