import React from "react";
import op1 from "../assets/op1.png";
import Star from "../assets/Star 1.png";
import op2 from "../assets/op2.png"
import op3 from "../assets/op3.png"

function Card() {
  return (
    <>
      <div className="flex">
        <div className="w-[176px] h-[235px] ml-[36px] ">
          <img className="w-[176px] h-[235px] rounded-[10px] object-cover" src={op1} />
          <p className="text-[12px] mt-[6px] flex items-center gap-1">
            <img src={Star} className="w-[14px] h-[14px]  inline-block " /> 5.0{" "}
            <span className="text-[#918E9B]">(6) - USA</span>
          </p>
          <p className="text-[12px] mt-[6px]">
            Life lessons with Katie Zaferes
          </p>
          <p className="text-[#222222] font-[600]">
            From $136 <span className="font-[300]">/ person</span>
          </p>
        </div>

        <div className="w-[176px] h-[235px] ml-[36px] ">
          <img className="w-[176px] h-[235px] rounded-[10px] object-cover" src={op2} />
          <p className="text-[12px] mt-[6px] flex items-center gap-1">
            <img src={Star} className="w-[14px] h-[14px]  inline-block " /> 5.0{" "}
            <span className="text-[#918E9B]">(6) - USA</span>
          </p>
          <p className="text-[12px] mt-[6px]">
            Life lessons with Katie Zaferes
          </p>
          <p className="text-[#222222] font-[600]">
            From $136 <span className="font-[300]">/ person</span>
          </p>
        </div>

        <div className="w-[176px] h-[235px] ml-[36px] ">
          <img className="w-[176px] h-[235px] rounded-[10px] object-cover" src={op3} />
          <p className="text-[12px] mt-[6px] flex items-center gap-1">
            <img src={Star} className="w-[14px] h-[14px]  inline-block " /> 5.0{" "}
            <span className="text-[#918E9B]">(6) - USA</span>
          </p>
          <p className="text-[12px] mt-[6px]">
            Life lessons with Katie Zaferes
          </p>
          <p className="text-[#222222] font-[600]">
            From $136 <span className="font-[300]">/ person</span>
          </p>
        </div>

        
      </div>
    </>
  );
}

export default Card;
