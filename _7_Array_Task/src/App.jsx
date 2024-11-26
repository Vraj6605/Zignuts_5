import { useState } from "react";
import Child1 from "./Comp/Child1";
import Child2 from "./Comp/Child2";
import Data from "../src/JsFile/Data";
import Box from "./Comp/Box";
import Spile from "./Comp/Spile";

function App() {
  // const [name,setName] = useState("Vraj")

  const styles = {
    backgroundColor: "black",
  };

  const styles2 = {
    backgroundColor: "white",
  };

  const [data, setData] = useState(Data);

  // function toogle(id){
  //   console.log(id); 
  //   setData(prev => {
  //     let newSquare = [];
  //     for(let i = 0 ; i < prev.length ; i++){
  //       let currentSquare = prev[i];
  //       if(currentSquare.id == id){
  //         let newObject = {
  //           ...currentSquare,
  //           on : !currentSquare.on
  //         }
  //         newSquare.push(newObject)
  //       }else{
  //         newSquare.push(currentSquare);
  //       } 
  //     }
  //     return newSquare;
  //   })
  // }


  // or --------------------

  function toogle(id){
    setData(prev => {
      return prev.map((square) => {
        return square.id == id ? {...square,on:!square.on} : {...square}
      })
    })
  }
  

  let list = data.map((item) => (
    <Box item={item}  key={item.id} onClick = {toogle} />
  ));

  return (
    <>

      {/* <div className="w-[400px] h-[100px] mt-[200px] m-auto flex flex-wrap justify-center">
        {list}
      </div> */}
      <Spile/>

    </>
  );
}
export default App;

{
  /* 
  
<>

  // const [count, setCount] = useState(["Thing1","Thing2"]);
  // function handleClick() {
  //   setCount([...count,`Thing${count.length + 1}`]);
  // }

  // let list = count.map((e) => {return <h1 key={e}>{e}</h1>})


  // -------------------------


  <div className=" flex justify-center items-center ">
    <button
      onClick={handleClick}
      className="text-[20px] font-[800] text-gray-800 border-[5px] p-2  border-[black]"
    >
      Add Item
    </button>
  </div>
  <div>
    {list}
  </div>
</>

*/
}
