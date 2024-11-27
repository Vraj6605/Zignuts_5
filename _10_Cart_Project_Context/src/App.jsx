import React from "react";
import Card from "./Components/Card";
import products from "./DataSet.js";
import Navbar from "./Components/Navbar.jsx";
import CartProd from "./Components/CartProd.jsx";

function App() {
  const list = products.map((e) => {
    return <Card key={e.name} name={e.name} desc={e.desc} price={e.price} img={e.img} />
  });

  return (
    <>
      <Navbar/>
    <div className="flex flex-wrap gap-3 justify-center items-center p-[10px]">
      {list}
    </div>
    <CartProd/>
    </>
  );
}

export default App;
