import React, { useContext } from 'react'
import { cartContext } from '../Context/cartContext'



function Card({name,desc,price,img}) {

  const CartContextData = useContext(cartContext);

  const onHandle = () => {
    console.log("Data Buttion" , CartContextData);
    
    return CartContextData.setItems([...CartContextData.items,{name:name,price:price}]);
  }

  return (
    <div className='relative w-[250px] h-[400px] inline-block  bg-gray-800 rounded-lg text-white border-[2px] border-black'>
      <img className='w-[200px] h-[200px] m-auto mb-[10px] object-cover rounded-sm' src={img} alt="" />
      <div className='w-[90%] m-auto flex-1'>
        <h1 className='font-[700] text-[20px]'>{name}</h1>
        <p className='text-[12px]'>{desc}</p>
        <h2>${price}</h2>
        <button onClick={onHandle} className='w-[90%] absolute bottom-3 m-auto bg-orange-400 p-[3px] rounded-lg mt-[10px]'>Add to Cart</button>
      </div>
    </div>
  )
}

export default Card
