import React from 'react'
import Logo from "../assets/Logo.png"

function Navbar() {
  return (
    <div className='sm:w-[550px] w-[100] sm:h-[65px] h-[50px] flex items-center bg-[#672280]'>
      <img className='ml-[30px]' src={Logo}/> 
      <h1 className='text-[#FFFFFF] ml-[10px] font-[600] text-[20px] sm:text-[26px]'>Meme Generator</h1>
    </div>
  )
}

export default Navbar
