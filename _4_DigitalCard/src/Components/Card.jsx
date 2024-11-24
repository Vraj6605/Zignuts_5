import React from "react";

import Image from "./Image";
import IntroPart_1 from "./IntroPart_1";
import IntroPart_2 from "./IntroPart_2";
import Footer from "./Footer"

function Card({name,passion,about,intrest,img}) {

  return (
    <div className="min-w-[317px] h-[700px] m-auto mt-[50px] bg-[#23252C] rounded-lg">
      <Image img={img}/>
      <IntroPart_1 name = {name} passion={passion} />
      <IntroPart_2 about={about} intrest = {intrest}/>
      <Footer/>
    </div>
  );
}

export default Card;
