import { cakeContainer } from '../productsCon/productsCon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function Products({ handleAddCart }){

    const productCat = ['All', 'Birthday Cakes', 'Wedding Cakes' , 'Cupcakes'];
    
    const [cakeCat, setCakeCat] = useState(cakeContainer);
    const [findCake, setFindCake] = useState(null)
    const [heartColor, setHeartColor] = useState(false);

    function handleCat(e){
        if(e === "All"){
            setCakeCat(cakeContainer)
        } else {
            const catSpace = e.replace(/\s+/g, "").toLowerCase();
            const filterCat = cakeContainer.filter((cat) => {
                return cat.type === catSpace
            })
            setCakeCat(filterCat) 
        } 
    }

    function handleSearchCake(e) {
        const searchValue = e.target.value.toLowerCase();
        if(e.target.value.includes(" ")){
            alert("Please search something.")
            setCakeCat(cakeCat)
            return;
        } 

        const filterSearch = cakeContainer.filter((c) => {
            return c.name.toLowerCase().includes(searchValue)
        });
        if(filterSearch.length === 0){
            setFindCake("Product not found!")
        } else {
            setFindCake(null)
            setCakeCat(filterSearch);
        }

    }

    const handleFav = (index) => {
        setHeartColor((fav) => ({...fav, [index] : !fav[index]}))
    }

    return(
        <div id='cake-container' className="w-full min-h-svh h-full">
            {/* Products Header */}
            <div className="md:mt-10 flex md:justify-evenly flex-col md:flex-row justify-center items-center gap-y-2">
                <h1 className="md:text-2xl">Our Special Products</h1>
                {/* categories */}
                <div className="group w-[150px] text-center">
                    <h1>Categories</h1>
                    <ul className='group-hover:block hidden absolute bg-white shadow-xl z-20'>
                        {productCat.map((eachCat) => (
                            <li onClick={() => handleCat(eachCat)} className='hover:bg-gray-100 md:px-5 py-2'>{eachCat}</li>
                        ))}
                    </ul>
                </div>
                {/* Search Bar */}
                <div>
                    <input placeholder='Search product' id='searchProduct' onKeyUp={(e) => handleSearchCake(e)} className="border p-1 border-black" type="text" />
                </div>
            </div>
            
            {/* Products container */}
            <div className="md:px-5">
                {findCake ? 
                /* Not found */
                (<div className='md:text-2xl flex justify-center items-center text-center mt-20'>{findCake}</div>) :
                (<div className='grid md:grid-cols-4 grid-cols-2 md:gap-x-2 md:gap-y-8 gap-2 md:p-0 p-2 items-center justify-evenly md:mt-10'>
                    {cakeCat.map((cake, index) => (
                    <div key={index} className='relative shadow-md md:px-5 px-1 py-3 rounded-md text-center '>
                        {/* add to favorite */}
                         <button onClick={() => handleFav(index)}><FontAwesomeIcon className={`absolute left-5  ${heartColor[index] ? 'text-red-500' : 'text-black'}`} icon={faHeart} /></button>
                        <img className='md:h-[150px] md:w-[200px] h-[120px] w-[150px] mx-auto' src={cake.img} alt="" />
                        {/* Price */}
                        <div className=''>
                            <h1 className='font-semibold'>{cake.name}</h1>
                            <p>{cake.price} pesos</p>
                        </div>
                        {/* Buy Btn */}
                        <div className='flex gap-2 justify-center md:mt-3'>
                            <button className='bg-red-500 md:px-5 px-2 rounded-md text-white'>Order Now</button>
                            <button className='hover:scale-110 duration-300 ease-in-out' onClick={() => handleAddCart(cake)}><FontAwesomeIcon icon={faCartShopping} /></button>
                        </div>
                    </div>
                    ))}
                </div>)}
            </div>
        </div>
    )
}

export default Products;