import React from 'react'

function IntroPart_2({about,intrest}) {
  return (
    <div className="w-[250px] h-[200px] m-auto mt-[12px]">
        <div className="mt-[10px]">
          <h1 className="font-inter text-base font-bold leading-6 text-left text-[#F5F5F5]">
            About
          </h1>
          <p class="font-inter text-[10px] font-normal leading-[15.36px] text-left text-[#DCDCDC]">
           {about}
          </p>
        </div>
        <div className="mt-[10px]">
          <h1 className="font-inter text-base font-bold leading-6 text-left text-[#F5F5F5]">
            Interests
          </h1>
          <p class="font-inter text-[10px] font-normal leading-[15.36px] text-left text-[#DCDCDC]">
            {intrest}
          </p>
        </div>
      </div>
  )
}

export default IntroPart_2
