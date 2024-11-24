import React from 'react'
import HeroPhoto from "../assets/HeroPhoto.png"

function Hero() {
  return (
    <div className='flex justify-center items-center my-[30px]'>
      <img src={HeroPhoto} className='w-[395px] h-[232px]'/>
    </div>
  )
}

export default Hero
