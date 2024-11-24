import React from 'react'

function Memepic({firstData,secondData}) {
  return (
      <div className='sm:w-[500px] sm:h-[300px] w-[300px] h-[300px]   bg-[url("./assets/Pic.png")] bg-center relative m-auto bg-no-repeat '>
        <h1 className="sm:text-[32px] text-[26px] font-[900]  bg-white px-[10px] text-[#000000] absolute top-[20px] right-[40px]">
          {firstData}
        </h1>
        <h1 className="sm:text-[32px] font-[900] text-[26px] bg-white px-[10px] text-[#0f0d0d] absolute bottom-[30px] left-[40px]">
          {secondData}
        </h1>
      </div>
  )
}

export default Memepic
