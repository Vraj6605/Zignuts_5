import Navbar from "../src/Comp/Navbar"
import Footer from "./Comp/Footer";
import Input from "./Comp/Input"
import { useState } from "react";

function App() {

  const [firstText, setFirstText] = useState(null);
  const [secondText, setSecondText] = useState(null);
  const [firstData, setFirstData] = useState("");
  const [secondData, setSecondData] = useState("");
  function onClick(){
    setFirstData(firstText);
    setSecondData(secondText);
    setFirstText("");
    setSecondText("")
  }


  return (
   <div className="sm:w-[550px]  sm:m-auto sm:mt-[100px] text-black sm:bg-white bg-slate-400">
     <Navbar/>
     <Input onClick={onClick} firstText={firstText} secondText={secondText} setFirstText={setFirstText} setSecondText={setSecondText} firstData={firstData} secondData={secondData}/>
     <Footer/>
   </div>
  )
}

export default App
