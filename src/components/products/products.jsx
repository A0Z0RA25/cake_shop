import cake2 from './cake2.png';
import cake3 from './cake3.png';
import cake4 from './cake4.png';
import bdcake1 from './bdcake1.png';
import wdcake1 from './wdcake1.png';
import wdcake2 from './wdcake2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export const cakeContainer = [
    {img: cake2, name: 'Chocolate', price: 900, type: 'cupcakes'},
    {img: cake3, name: 'Vanilla', price: 750, type: 'cupcakes'},
    {img: cake4, name: 'Karamel', price: 850, type: 'cupcakes'},
    {img: bdcake1, name: 'Karamel', price: 850, type: 'birthdaycakes'},
    {img: wdcake1, name: 'Karamel', price: 850, type: 'weddingcakes'},
    {img: wdcake2, name: 'Karamel', price: 850, type: 'weddingcakes'},
];

function Products({ handleAddCart }){

    const productCat = ['All', 'Birthday Cakes', 'Wedding Cakes' , 'Cupcakes'];

    

    const [searchCake, setSearchCake] = useState('');
    const [cakeCat, setCakeCat] = useState('all');
    const [heartColor, setHeartColor] = useState(false)

    function handleSearch(e) {
        setSearchCake(e.target.value.toLowerCase());
    }

    function handleCakeCat(e){
        setCakeCat(e.target.value === 'All' ? 'all' : e.target.value.replace(/\s+/g, '').toLowerCase())
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
                <div className="group relative w-[150px] text-center">
                    <select onClick={handleCakeCat} name='Categories' className="w-full border border-black text-center">
                        {productCat.map((cat, i) => (
                            <option key={i} className="hover:bg-orange-200"><a href="#">{cat}</a></option>
                        ))}
                    </select>
                </div>
                {/* Search Bar */}
                <div>
                    <input placeholder='Search product' id='searchProduct' onKeyUp={handleSearch} className="border p-1 border-black" type="text" />
                    
                </div>
            </div>
            
            {/* Products container */}
            <div className="md:px-5">
                <div className='grid md:grid-cols-4 grid-cols-2 md:gap-x-2 md:gap-y-8 gap-2 md:p-0 p-2 items-center justify-evenly md:mt-10'>
                    {cakeContainer.filter((item) => (item.name.toLowerCase().includes(searchCake) || searchCake === '') &&
                                                    (cakeCat === 'all' || item.type === cakeCat)
                    ).map((cake, index) => (
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
                </div>
            </div>
        </div>
    )
}

export default Products;