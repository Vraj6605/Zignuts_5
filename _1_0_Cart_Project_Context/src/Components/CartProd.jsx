import React from "react";
import { useContext } from "react";
import { cartContext } from "../Context/cartContext";

function CartProd() {
  const CartContextData = useContext(cartContext);


  return (
    <div>
      <h1 className="text-[30px] font-bold text-blue-900 text-center border-t-[2px] mt-[10px] rounded-lg border-black">
        Your Shoping
      </h1>

      <div>
        {CartContextData.items.length == 0 ? (
          <p className="text-black font-extrabold text-[30px] text-center ">
            No Items Available
          </p>
        ) : (
          <h1>
            {CartContextData.items.map((e) => <h1 className="font-bold text-[25px] text-center">{e.name} : ${e.price}</h1>)}
          </h1>
        )}

        <h1 className="text-black text-[35px] text-center font-bold border-[2px]  border-black mb-[20px]">Total Bill :- ${CartContextData.items.reduce((a,b) => Number(b.price) + a ,0)}</h1>
      </div>
    </div>
  );
}

export default CartProd;
