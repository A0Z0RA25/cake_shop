

function Cart({showCart, addCart}){

    console.log(addCart)
    return(
        <div className={`fixed overflow-y-scroll h-screen md:w-1/4 w-[300px] bg-orange-300 top-0 ${showCart ? "visible" : "hidden"}`}>
            {/* products */}
            <div className="relative">
                <h1 className="md:text-2xl font-semibold text-center ">Cart</h1>
                {addCart.map((each) => (
                    <div className="flex justify-around bg-white shadow-md m-1">
                        <div className="flex items-center">
                            <img className="md:h-[100px] h-[80px] w-[80px] md:w-[100px]" src={each.img} alt="" />
                            <h1 className="text-[13px]">{each.name}</h1>
                        </div>
                        <button>+</button>
                        <button>-</button>
                    </div>
                ))}
                <button className="sticky bottom-0 bg-red-400 w-full">Close</button>
            </div>
            
        </div>
    )
}

export default Cart;