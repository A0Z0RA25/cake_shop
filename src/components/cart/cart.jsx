import { useEffect, useState } from "react";


function Cart({showCart, addCart, handleCloseCart}){

  const handleIncrease = (index) => {
    setCartItems((prevCart) => {
      const updatedCart = [...prevCart];
      updatedCart[index].quantity += 1; // Increment the quantity
      return updatedCart;
    });
  };
    

    return(
        <div className={`fixed overflow-hidden h-screen md:w-1/4 w-[300px] bg-orange-300 top-0 z-50 ${showCart ? "visible" : "hidden"}` }>
            {/* products */}
            <h1 className="md:text-2xl font-semibold text-center ">Cart</h1>
            <div className="overflow-y-scroll h-full">
                {addCart.map((each, index) => (
                    <div className="flex justify-around bg-white shadow-md m-1">
                        <div className="flex items-center">
                            <img className="md:h-[100px] h-[80px] w-[80px] md:w-[100px]" src={each.img} alt="" />
                            <h1 className="text-[13px]">{each.name}</h1>
                        </div>
                        <div className="flex items-center">
                            <button onClick={() => handleIncrease(index)}>+</button>
                            <p className="bg-gray-300 px-4 mx-1">{each.quantity}</p>
                            <button>-</button> 
                        </div>
                        
                    </div>
                ))} 
            </div>
            <button onClick={handleCloseCart} className="absolute bottom-0 bg-red-400 w-full">Close</button>
        </div>
    )
}

export default Cart;