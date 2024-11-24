import React, { useState } from "react";
import Memepic from "./Memepic";
import Button from "./Button";
import TakeInput from "./TakeInput";

function Input({
  onClick,
  firstText,
  setFirstText,
  secondText,
  setSecondText,
  firstData,
  secondData,
}) {
 

  return (
    <div className="mt-[10px]">
      <div className="flex justify-evenly flex-1 gap-3 sm:flex flex-wrap">
        <TakeInput name="TopText" setMeme={setFirstText} MemeText={firstText} />
        <TakeInput name="BottomText" setMeme={setSecondText} MemeText={secondText} />
      </div>

      <Button onClick={onClick} />
      <Memepic firstData={firstData} secondData={secondData} />
    </div>
  );
}

export default Input;













 // const [firstText, setFirstText] = useState(null);
  // const [secondText, setSecondText] = useState(null);
  // const [firstData, setFirstData] = useState("");
  // const [secondData, setSecondData] = useState("");
  // function onClick(){
  //   setFirstData(firstText);
  //   setSecondData(secondText);
  //   setFirstText("");
  //   setSecondText("")
  // }


{
  /* <div>
          <h1 className="font-[500]">Top Text</h1>
          <input
            type="text"
            onChange={(e) => setFirstText(e.target.value)}
            placeholder="Shut Up"
            value={firstText}
            className="bg-[#ffffff] px-[10px] py-[4px] rounded-lg opacity-[.5] border-[2px]"
          />
        </div> */
}
