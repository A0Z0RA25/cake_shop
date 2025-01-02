import { cakeContainer } from '../productsCon/productsCon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import ribbon from './ribbon.png';
import special from './special.png';
import { useState } from 'react';

function Products({ handleAddCart }){

    const productCat = ['All', 'Birthday Cakes', 'Wedding Cakes' , 'Cupcakes'];

    const [cakeCat, setCakeCat] = useState(cakeContainer);
    const [findCake, setFindCake] = useState(null)
    const [heartColor, setHeartColor] = useState(false);
    const [displayCat, setDisplayCat] = useState("Categories");

    function handleCat(e){
        if(e === "All"){
            setCakeCat(cakeContainer)
            setDisplayCat("All")
        } else {
            const catSpace = e.replace(/\s+/g, "").toLowerCase();
            const filterCat = cakeContainer.filter((cat) => {
                return cat.type === catSpace
            })
            setDisplayCat(e)
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
            {/* products container */}
            <div className='md:flex flex-row justify-around md:px-3 w-full'>
            {/* list of category */}
            <div className='h-full grid md:grid-rows-3 grid-cols-2 md:mt-5 gap-y-5 gap-x-2 md:p-0 p-2'>
                <div className='border relative border-black md:h-40 md:w-56 w-full'>
                    <div className='relative'>
                        <img className='absolute -top-[41.5px] h-24 w-full -z-10' src={ribbon} alt="" />
                        <h1 className='text-center text-white'>Special Cake</h1>
                    </div>
                    <img className='h-24 w-36 mx-auto' src={special} alt="" />
                    {/* name and price */}
                    <div className='flex md:flex-row flex-col text-center justify-evenly'>
                        <h1 className='bg-banner text-sm px-2'>Chocolate cake</h1>
                        <p>500 pesos</p>
                    </div>
                </div>
                <div className='border relative border-black md:h-40 md:w-56 w-full'>
                    <div className='relative'>
                        <img className='absolute -top-[41.5px] h-24 w-full -z-10' src={ribbon} alt="" />
                        <h1 className='text-center text-white'>Special Cake</h1>
                    </div>
                    <img className='h-24 w-36 mx-auto' src={special} alt="" />
                    {/* name and price */}
                    <div className='flex md:flex-row flex-col text-center justify-evenly'>
                        <h1 className='bg-banner text-sm px-2'>Chocolate cake</h1>
                        <p>500 pesos</p>
                    </div>
                </div>
            </div>
            
            {/* Products */}
            <div>
                {/* Products Header */}
                <div className="md:mt-5 flex md:justify-around flex-col md:flex-row justify-center items-center gap-y-2">
                    <h1 className="md:text-2xl">Featured</h1>
                    {/* categories */}
                    <div className="group md:w-[180px] text-center border border-black">
                        <h1 className='px-6'>{displayCat}</h1>
                        <ul className='group-hover:block hidden absolute bg-white shadow-xl z-20'>
                            {productCat.map((eachCat, index) => (
                                <li key={index} onClick={() => handleCat(eachCat)} className='hover:bg-gray-100 md:w-[180px] md:px-5 px-2 py-2'>{eachCat}</li>
                            ))}
                        </ul>
                    </div>
                    {/* Search Bar */}
                    <div>
                        <input placeholder='Search product' id='searchProduct' onKeyUp={(e) => handleSearchCake(e)} className="border p-1 border-black" type="text" />
                    </div>
                </div>
                {findCake ? 
                /* Not found */
                (<div className='md:text-2xl flex justify-center items-center text-center mt-20'>{findCake}</div>) :
                (<div className='grid md:grid-cols-3 grid-cols-2 md:gap-x-5 md:gap-y-8 gap-2 md:p-0 p-2 items-center justify-evenly md:mt-5'>
                    {cakeCat.map((cake, index) => (
                    <div key={index} className='relative shadow-md md:px-3 px-1 py-3 rounded-md text-center '>
                        {/* add to favorite */}
                         <button onClick={() => handleFav(index)}><FontAwesomeIcon className={`absolute left-5  ${heartColor[index] ? 'text-red-500' : 'text-black'}`} icon={faHeart} /></button>
                        <img className='md:h-[100px] md:w-[150px] h-[100px] w-[130px] mx-auto' src={cake.img} alt="" />
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
            
        </div>
    )
}

export default Products;