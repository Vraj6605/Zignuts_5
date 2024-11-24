import React from 'react'
import Logo from "../assets/Logo.png"

function Navbar() {
  return (
    <div className='w-[550px] h-[70px] flex shadow-md bg-[#FFFFFF] items-center'>
      <img src={Logo} className='w-[82px] h-[26px] ml-[30px]' />
    </div>
  )
}

export default Navbar
