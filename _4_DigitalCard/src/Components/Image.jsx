import React from 'react'
import profile from "../assets/Profile.png";

function Image({img}) {
  return (
    <img
        src={img}
        alt=""
        className="w-[317px] h-[317px] object-cover object-top rounded-lg"
      />
  )
}

export default Image
