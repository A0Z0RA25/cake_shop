import { useEffect, useState } from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Cart({showCart, addCart, handleCloseCart, handleIncrease, }){  

    return(
        <div className={`fixed overflow-hidden h-screen md:w-1/4 w-[300px] bg-orange-300 top-0 z-50 ${showCart ? "translate-x-0" : "-translate-x-full"} transition-all duration-500 ease-in-out` }>
            {/* head */}
            <div className="flex justify-center gap-x-10 my-2">
                <h1 className="md:text-2xl font-semibold text-center">Cart</h1>
                <button onClick={handleCloseCart} className="bg-white px-3 rounded-full"><FontAwesomeIcon icon={faXmark} /></button>
            </div>     
            {/* products */}
            <div className="overflow-y-scroll h-full">
                {addCart.map((each) => (
                    <div className="flex justify-around bg-white shadow-md m-1">
                        <div className="flex items-center">
                            <img className="md:h-[100px] h-[80px] w-[80px] md:w-[100px]" src={each.img} alt="" />
                            <h1 className="text-[13px]">{each.name}</h1>
                        </div>
                        <div className="flex items-center">
                            <button onClick={() => handleIncrease(each)}>+</button>
                            <p className="bg-gray-300 px-4 mx-1">{each.quantity}</p>
                            <button>-</button> 
                        </div>
                        
                    </div>
                ))} 
            </div>
        </div>
    )
}

export default Cart;