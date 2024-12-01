import React from "react";
import { G1, BR } from "./Assets";

function Hero() {
  return (
    <div className="relative overflow-hidden">
      <img className="w-[1403px] h-[789.19px]" src={G1} />
      <div className="absolute flex-1 gap-[20px] left-[856px] top-[161px]">
        <div className="w-[459px] h-[198px] ">
          <h1 className="text-[56px] font-[500] leading-[66.36px]">
            Mendleson Communication and Engagement
          </h1>
        </div>
        <div className="w-[544px] h-[67px]">
          <p className="font-[400] text-[18px] leading-[21.33px] mt-[25px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequuntur libero placeat labore eveniet.
          </p>
        </div>
      </div>

      
    </div>
  );
}

export default Hero;
