import React from 'react'

function Button({name,onClick}) {
  return (
    <button onClick={onClick} className='bg-black text-white border-white border-[2px] p-[6px] hover:text-black hover:bg-slate-500 rounded-lg font-bold'>{name} </button>
  )
}

export default Button
