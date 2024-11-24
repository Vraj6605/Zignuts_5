import React, { useState } from 'react'

function Box({item,onClick}) {

  // const [status,setStatus] = useState(!item.on);

  const styles = {
    backgroundColor: "black",
  };

  const styles2 = {
    backgroundColor: "white",
  };


  return (
    <div
      // style={status ? styles : styles2}
      style={item.on ? styles : styles2}

      className="w-[60px] h-[60px] border-[2px] border-[black] m-[5px]"
      key={item.id}
      // onClick={() => setStatus(prev => !prev)}
      onClick={() => onClick(item.id)}
    ></div>
  )
}

export default Box
