import React from "react";

function TakeInput({setMeme,MemeText,name}) {
  return (
    <div>
      <h1 className="font-[500]">{name}</h1>
      <input
        onChange={(e) => setMeme(e.target.value)}
        type="text"
        placeholder="Enter Here..."
        className="bg-[#ffffff] rounded-lg opacity-[.5] px-[10px] py-[4px] border-[2px] border-black"
        value={MemeText}
      />
    </div>
  );
}

export default TakeInput;
