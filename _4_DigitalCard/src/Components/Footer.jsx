import React from 'react'
import op1 from "../assets/op1.png";
import op2 from "../assets/op2.png";
import op3 from "../assets/op3.png";
import op4 from "../assets/op4.png";

function Footer() {
  return (
    <div class="w-[317px] h-[64px] top-[760px] left-[116px] gap-0 bg-slate-900  rounded-b-lg flex justify-evenly items-center">
        <img src={op1} className="w-[25px] h-[25px] "/>
        <img src={op2} className="w-[25px] h-[25px] " />
        <img src={op3} className="w-[25px] h-[25px] " />
        <img src={op4} className="w-[25px] h-[25px] " />
      </div>
  )
}

export default Footer
