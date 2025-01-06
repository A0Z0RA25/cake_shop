import React, { useState } from 'react';
import { motion } from 'motion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faRightToBracket, faRightFromBracket, faCakeCandles, faBars } from '@fortawesome/free-solid-svg-icons';
import { useAuth0 } from '@auth0/auth0-react';

function Navigation({cartCount, handleShowCart}){

    const { loginWithRedirect, logout , user, isAuthenticated } = useAuth0();
    console.log(isAuthenticated)
    const list = [
        {id: 1, name: "Home", link: "#home-page"},
        {id: 2, name: "Products", link: "#cake-container"},
        {id: 3, name: 'About Us', link: '#aboutUs'},
        {id: 4, name: "Contact", link: "#"}
    ];

    const [showNav, setShowNav] = useState(false);

    const handleShowNav = () => {
        setShowNav(!showNav)
        console.log("working")
    }

    return(
        
        <motion.div 
            className="fixed w-svw flex flex-wrap justify-evenly items-center z-30 bg-banner text-white py-2 shadow-xl font-text md:text-xl"
            initial={{ y: -10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            >
            <div className="order-2 md:order-1 font-bold md:text-2xl flex items-center gap-x-2">
                <FontAwesomeIcon className='text-white' icon={faCakeCandles} />
                <h1>sweet cakes</h1>
            </div>
            { /*list*/ }
            <div className="order-1 md:order-2 md:w-1/2 group">
                <FontAwesomeIcon onClick={() => handleShowNav()} className='md:hidden' icon={faBars} />
                <ul className={`md:flex md:group-hover:flex md:top-0 md:bg-transparent md:text-white top-12  md:relative justify-evenly border font-semibold border-white rounded gap-x-3 px-2 bg-white backdrop-blur-md text-black ${showNav ? "flex absolute" : "hidden"} `}>
                    {list.map((li) => (
                        <li className='hover:text-white hover:-translate-y-1 duration-300 ease' key={li.id}><a href={li.link}>{li.name}</a></li>
                    ))}
                </ul>
            </div>
            {/* Cart */}
            <div className='group relative order-3 text-homeBg'>
                <button onClick={handleShowCart}><FontAwesomeIcon className='group-hover:scale-110 duration-300 ease-in-out' icon={faCartShopping} /></button>
                <p className='absolute top-10 text-xs left-0 hidden group-hover:block bg-white text-black px-2 rounded'>cart</p>
                <span className='bg-productBg text-black rounded-full absolute top-0 -left-2 text-xs px-1'>{cartCount}</span>
            </div>
            { isAuthenticated ? 
            (
            // log out   
            <div className='group order-4 relative'>
                <div className='flex flex-col'>
                    <h1>Carl Jasper Ramos</h1>
                    <button onClick={() => logout({ logoutParams: { returnTo: "https://a0z0ra25.github.io/cake_shop" } })}><FontAwesomeIcon className='group-hover:scale-110 duration-300 ease-in-out' icon={faRightFromBracket} /></button>
                </div>
                <p className='absolute hidden text-xs group-hover:block bg-white text-black px-2 rounded'>log in</p>
            </div>
            
            ) : ( 
            //log in  
            <div className='group order-4 relative'>
                <button onClick={() => loginWithRedirect()}><FontAwesomeIcon className='group-hover:scale-110 duration-300 ease-in-out' icon={faRightToBracket} /></button>
                <p className='absolute top-10 text-xs left-0 hidden group-hover:block bg-white text-black px-2 rounded'>log in</p>
            </div>
            )} 
            
        </motion.div>
    ) 
}
export default Navigation;