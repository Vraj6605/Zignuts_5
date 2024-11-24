import React from 'react'

function Button({onClick}) {
  return (
    <div className="sm:w-[477px] w-[70%] m-auto rounded-lg my-[15px] sm:my-[20px]">
    <button onClick={onClick} className="w-[100%] rounded-lg sm:p-[10px] p-[8px] bg-[#672280] text-center font-bold sm:text-[16px] text-[14px] text-white">
      Get a new Meme Image📸
    </button>
  </div>
  )
}

export default Button
