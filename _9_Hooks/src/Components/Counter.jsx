import React, { useState } from 'react'

function Counter() {

  const [couter,setCounter] = useState(0);

  return (
    <div className='flex justify-center items-center gap-7'>
      <button className='bg-slate-600 text-white p-[10px] m-[5px] rounded-lg' onClick={() => setCounter(prevCounter => prevCounter + 1)}>Increment</button>
      <h1 className='text-[50px] text-red-900 font-bold' >{couter}</h1>
      <button className='bg-slate-600 text-white p-[10px] m-[5px] rounded-lg' onClick={() => setCounter(prevCounter => prevCounter - 1)}>Decrement</button>
    </div>
  )
}

export default Counter
