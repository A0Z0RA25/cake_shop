import React from 'react';
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

    return(
        
        <div className="fixed w-svw flex flex-wrap justify-evenly items-center z-30 bg-banner text-white py-2 shadow-xl font-text md:text-xl">
            <div className="order-2 md:order-1 font-bold md:text-2xl flex items-center gap-x-2">
                <FontAwesomeIcon className='text-white' icon={faCakeCandles} />
                <h1>sweet cakes</h1>
            </div>
            { /*list*/ }
            <div className="order-1 md:order-2 md:w-1/2 group">
                <FontAwesomeIcon className='md:hidden' icon={faBars} />
                <ul className="md:flex md:group-hover:flex group-hover:block absolute md:relative hidden justify-evenly border font-semibold border-white rounded gap-x-3 px-2">
                    {list.map((li) => (
                        <li className='hover:text-white hover:-translate-y-1 duration-300 ease' key={li.id}><a href={li.link}>{li.name}</a></li>
                    ))}
                </ul>
            </div>
            {/* Cart */}
            <div className='group relative order-3 text-homeBg'>
                <button onClick={handleShowCart}><FontAwesomeIcon className='group-hover:scale-110 duration-300 ease-in-out' icon={faCartShopping} /></button>
                <span className='bg-productBg text-black rounded-full absolute top-0 -left-2 text-xs px-1'>{cartCount}</span>
            </div>
            { isAuthenticated ? 
            (
            // log out   
            <div className='group order-4'>
                <h1>{user.name}</h1>
                <button onClick={() => logout({ logoutParams: { returnTo: "https://a0z0ra25.github.io/cake_shop" } })}><FontAwesomeIcon className='group-hover:scale-110 duration-300 ease-in-out' icon={faRightFromBracket} /></button>
            </div>
            
            ) : ( 
            //log in  
            <div className='group order-4'>
                <button onClick={() => loginWithRedirect()}><FontAwesomeIcon className='group-hover:scale-110 duration-300 ease-in-out' icon={faRightToBracket} /></button>
            </div>
            )} 
            
        </div>
    ) 
}
export default Navigation;