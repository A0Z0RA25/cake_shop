import { useEffect, useState } from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Cart({showCart, addCart, setAddCart, handleCloseCart, setCartCount, cartCount}){  

    const handleIncrease = (x) => {
        const exist = addCart.find((cake) => {
            return cake.id === x.id
        })
        setAddCart(addCart.map((eachCake) => {
            return eachCake.id === x.id ? {...exist, quantity: exist.quantity + 1} : eachCake
        }))  
    }

    const handleDecrease = (x) => {
        const exist = addCart.find((cake) => {
            return cake.id === x.id
        })
        if(exist.quantity > 1){
            setAddCart(addCart.map((eachCake) => {
                return eachCake.id === x.id ? {...exist, quantity: exist.quantity - 1} : eachCake
             }))  
        }
    }

    const handleRemove = (x) => {
        const exist = addCart.find((cake) => {
            return cake.id === x.id 
        })
        if(exist.quantity > 0){
            setAddCart(addCart.filter((currElem) => {
                return currElem.id !== x.id
            }))
            setCartCount(cartCount - 1)
        }
        
    }

    const subTotal = addCart.reduce((price, item) => price + item.quantity * item.price, 0);

    return(
        <div className={`fixed overflow-hidden h-screen md:w-1/3 w-full bg-orange-300 top-0 z-50 ${showCart ? "translate-x-0" : "-translate-x-full"} transition-all duration-500 ease-in-out` }>
            {/* head */}
            <div className="flex justify-evenly gap-x-36 my-2">
                <h1 className="md:text-2xl font-semibold text-center">Cart</h1>
                <button onClick={handleCloseCart} className="bg-white px-3 rounded-full"><FontAwesomeIcon icon={faXmark} /></button>
            </div> 
            {addCart.length == 0 ? (
                <div className="flex justify-center h-full">
                    <h1 className="my-auto">Your cart is empty!</h1>
                </div>) :  (  
            <div className="overflow-y-scroll h-full pb-32">
                {addCart.map((each) => (
                    <div className="flex justify-around bg-white shadow-md m-1">
                        <div className="flex items-center flex-col">
                            <img className="md:h-[100px] h-[80px] w-[80px] md:w-[100px]" src={each.img} alt="" />
                        </div>
                        {/* cakeName and price */}
                        <div>
                            <h1 className="text-[13px]">{each.name}</h1>
                            <p>Price: {each.price}</p>
                            <p>Total: {each.price * each.quantity}</p>
                        </div>
                        <div className="flex items-center">
                            <button className="bg-green-300 px-1" onClick={() => handleIncrease(each)}>+</button>
                            <input type="number" className="w-10 text-center bg-gray-200" value={each.quantity}/>
                            <button className="bg-red-300 px-1" onClick={() => handleDecrease(each)}>-</button> 
                        </div>
                        {/* remove btn */}
                        <div>
                            <button onClick={() => handleRemove(each)}><FontAwesomeIcon icon={faXmark} /></button>
                        </div>
                    </div>
                ))} 
            </div>
            )}
            {/* subtotal */}
            {addCart.length > 0 && 
                <div className="bg-white shadow-xl absolute bottom-0 w-full px-10 py-2">
                    <h2>Sub total: {subTotal}</h2>
                    <button className="text-center w-full font-bold text-white rounded-full bg-green-500">Checkout</button>
                </div>
            }
            
        </div>
    )
}

export default Cart