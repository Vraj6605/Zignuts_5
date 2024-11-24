import React from 'react'
import Mail from "../assets/Mail.png";
import LinkedIn from "../assets/Linkedin.png";

function IntroPartOne({name,passion}) {
  return (
    <>
      <h1 className="text-[#FFFFFF]  font-[700] text-[25px] leading-[30px] text-center mt-[20px]">
        {name}
      </h1>
      <p className="text-[#F3BF99] font-[400] text-[12.8px] leading-[16px] text-center">
        {passion}
      </p>
      <p className="text-[#F5F5F5] text-[10px] leading-[16px] font-[400] text-center">
        {name}.website
      </p>
      <div className="flex justify-center gap-[8px] mt-[10px]">
        <button className="w-[115px] text-[14px] rounded-[10px] font-[500] leading-[16px] h-[35px] px-[10px] py-auto  bg-white">
          {" "}
          <img src={Mail} className="inline-block" /> Email
        </button>
        <button className="w-[115px] text-[14px] rounded-[10px] font-[500] h-[35px] px-[10px] py-auto bg-[#5093E2]">
          {" "}
          <img src={LinkedIn} className="inline-block w-[16px] h-[16px]" />{" "}
          LinkedIn
        </button>
      </div>

    </>
  )
}

export default IntroPartOne
