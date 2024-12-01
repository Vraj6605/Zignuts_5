import React from "react";
import { logo, LT, TR ,BL ,hu} from "./Assets";

function Navbar() {
  return (
    <div className="relative overflow-x-hidden">
      {/* First Container */}
      <div className="flex justify-between relative">
        <div className="flex bg-[logo]">
          <div className="">
            <img className="w-[119px] h-[111px]" src={LT} alt="" />
          </div>
          <img className="w-[295px] h-[85px] ml-[10px]" src={logo} />
        </div>
        <div className="absolute items-center w-[472px] right-[130px]">
          <ul className="flex justify-between h-[68px] items-center">
            <li className="font-[400] text-[18px] leading-[21.09px]">
              About Us
            </li>
            <li className="font-[400] text-[18px] leading-[21.09px]">
              Services
            </li>
            <li className="font-[400] text-[18px] leading-[21.09px]">Team</li>
            <li className="font-[400] text-[18px] leading-[21.09px]">
              Clients
            </li>
            <li className="font-[400] text-[18px] leading-[21.09px]">
              Contact Us
            </li>
          </ul>
        </div>
        <div className="relative top-[-14px] right-[-77px]">
          <img
            className="opacity-[.9] w-[359px] h-[376px]  right-[-77px] "
            src={TR}
          />
        </div>
      </div>

      {/* Second Container */}
      
    </div>
  );
}

export default Navbar;
