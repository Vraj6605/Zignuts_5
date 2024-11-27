import React from 'react'
import Button from './Button'
import { useDispatch,useSelector } from 'react-redux'


function Counter() {

  const dispatch = useDispatch();
  const count = useSelector(state => state);
  
  function handleInc(){
    dispatch({"type" : "INCREMENT"});
  }

  function handleDec(){
    dispatch({"type" : "DECREMENT"});
  }
  return (
    <>
      <h1 className='text-center text-4xl text-white font-bold '>Counter</h1>
      <div className='w-[400px] flex justify-center items-center bg-opacity-[.1] mt-[50px] p-[10px] rounded-lg bg-red-100 gap-6 m-auto'>

      <Button name="Decrement" onClick = {handleDec}/>
      <h1 className='text-3xl text-white font-bold '>{count}</h1>
      <Button name="Increment" onClick= {handleInc}/>
      
    </div>
    </>
  )
}

export default Counter
