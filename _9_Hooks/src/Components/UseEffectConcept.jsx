import React from 'react'
import { useState,useEffect } from 'react';

function UseEffectConcept() {
  // useEffect Hooks used to perform activity based on Compnent mount and unmount and also when data is Updated.

  const [couter,setCounter] = useState(0);
  
  useEffect(() => {
    console.log("When Component Mount(Component is Visible Over the Screen.)");
  },[])

  // When i want to run Function when Data is updated or changed.then Provide value at Dependencise Array.
  useEffect(() => {
    console.log("Data Updated Done",couter)
  },[couter])

  // when Component removed from Screen then we can return function from useEffect Hooks.
  useEffect(() => {
    return ()=>{
      console.log("Component Removed ",couter)
    }
  },[couter])

  return (
     <div className='w-[100px] m-auto flex-1 items-center'>

      <button className='bg-slate-600 text-white p-[10px] m-[5px] rounded-lg' onClick={() => setCounter(prevCounter => prevCounter + 1)}>Increment</button>
      <h1 className='text-[50px] text-center text-red-900 font-bold' >{couter}</h1>
      <button className='bg-slate-600 text-white p-[10px] m-[5px] rounded-lg' onClick={() => setCounter(prevCounter => prevCounter - 1)}>Decrement</button>

    </div>
  )
}

export default UseEffectConcept
