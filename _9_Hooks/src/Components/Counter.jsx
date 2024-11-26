import React, { useContext } from "react";
import { counterContext } from "../Context/counterContext";

function Counter() {
  const counterContextData = useContext(counterContext);
  console.log(counterContextData);

  return (
    <div className="flex justify-center items-center gap-7">
      <button
        className="bg-slate-600 text-white p-[10px] m-[5px] rounded-lg"
        onClick={() =>
          counterContextData.setCounter((prevCounter) => prevCounter + 1)
        }
      >
        Increment
      </button>

      <h1 className="text-[50px] text-red-900 font-bold">
        {counterContextData.Counter}
      </h1>

      <button
        className="bg-slate-600 text-white p-[10px] m-[5px] rounded-lg"
        onClick={() =>
          counterContextData.setCounter((prevCounter) => prevCounter - 1)
        }
      >
        Decrement
      </button>
    </div>
  );
}

export default Counter;
