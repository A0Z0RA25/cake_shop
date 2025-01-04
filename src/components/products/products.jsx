import { cakeContainer } from '../productsCon/productsCon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import banner from './banner.png';
import special from './special.png';
import { useState } from 'react';

function Products({ handleAddCart }){

    const productCat = ['All', 'Birthday Cakes', 'Wedding Cakes' , 'Cupcakes'];

    const [cakeCat, setCakeCat] = useState(cakeContainer);
    const [findCake, setFindCake] = useState(null)
    const [heartColor, setHeartColor] = useState(false);
    const [displayCat, setDisplayCat] = useState(false);

    function handleCat(e){
        if(e === "All"){
            setCakeCat(cakeContainer)
            setDisplayCat("All")
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
        <div id='cake-container' className="w-full min-h-svh h-full bg-productBg py-10">
            {/* products container */}
            <div className='md:flex flex-row justify-between md:px-3 w-full grid grid-cols-1'>
            {/* list of category */}
            <div className='h-full grid md:grid-rows-1 md:grid-cols-1 grid-cols-2 md:mt-5 gap-y-5 gap-x-2 md:p-0 p-2'>
                {/* Search Bar */}
                <div>
                    <input placeholder='Search product' id='searchProduct' onKeyUp={(e) => handleSearchCake(e)} className="border text-xs md:w-full w-[150px] p-1 border-black" type="text" />
                </div>
                {/* list */}
                <div className='border group relative border-black md:h-full md:w-56 w-full md:block'>
                    <div className='relative'>
                        <h1 className='bg-banner text-white md:w-[70%] text-center rounded-br-md'>Categories</h1>
                    </div>
                    <div className="md:text-right text-center overflow-hidden">
                        <ul className='z-20 md:block hidden group-hover:block md:relative absolute'>
                            {productCat.map((eachCat, index) => (
                                <li key={index} onClick={() => handleCat(eachCat)} className=' text-sm md:w-[100%] md:-translate-x-20 md:hover:translate-x-0 ease-in-out duration-500 border md:rounded-r-xl bg-banner text-white my-1 border-black md:px-5 px-2 py-2'>{eachCat}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                {/* specials */}
                <div className='border relative border-black md:h-full md:w-56 w-full hidden md:block'>
                    <div className='relative'>
                        <h1 className='bg-banner text-white w-[70%] text-center rounded-br-md'>Special cake</h1>
                    </div>
                    <img className='h-24 w-36 mx-auto my-1' src={special} alt="" />
                    {/* name and price */}
                    <div className='flex md:flex-row flex-col text-center justify-evenly'>
                        <h1 className='bg-banner rounded-t-sm text-white px-2'>Chocolate cake</h1>
                    </div>
                </div>
            </div>
            
            {/* Products */}
            <div className='md:w-[75%] md:px-10'>
                {/* Products Header */}
                <div className="md:mt-5 flex md:justify-around flex-col md:flex-row justify-center items-center gap-y-2">
                    <h1 className="md:text-2xl">Featured</h1>
                </div>
                {findCake ? 
                /* Not found */
                (<div className='md:text-2xl flex justify-center items-center text-center mt-20'>{findCake}</div>) :
                (<div className='grid md:grid-cols-3 grid-cols-2 md:gap-x-5 md:gap-y-8 gap-2 md:p-0 p-2 items-center justify-evenly md:mt-5'>
                    {cakeCat.map((cake, index) => (
                    <div key={index} className='relative hover:-translate-y-1 md:hover:-translate-y-3 duration-500 ease-in-out bg-white text-banner shadow-md md:px-3 px-1 py-3 rounded-md text-center '>
                        {/* add to favorite */}
                         <button onClick={() => handleFav(index)}><FontAwesomeIcon className={`absolute left-5 text-white  ${heartColor[index] ? 'text-red-500' : 'text-black'}`} icon={faHeart} /></button>
                        <img className='md:h-[100px] md:w-[150px] h-[100px] w-[130px] mx-auto' src={cake.img} alt="" />
                        {/* Price */}
                        <div className=''>
                            <h1 className='font-semibold'>{cake.name}</h1>
                            <p>{cake.price} pesos</p>
                        </div>
                        {/* Buy Btn */}
                        <div className='flex gap-2 justify-center md:mt-3'>
                            <button className='hover:scale-105 duration-300 ease-in-out border border-white text-white bg-banner md:px-5 px-2 rounded-md'>Order Now</button>
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