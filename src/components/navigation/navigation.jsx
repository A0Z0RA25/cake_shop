import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faCakeCandles, faRightToBracket, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
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
        <div className="fixed w-svw flex flex-wrap justify-evenly items-center gap-x-2 z-30 bg-orange-300 py-2">
            <div className="font-bold md:text-2xl"><FontAwesomeIcon icon={faCakeCandles} />Cake's</div>
            { /*list*/ }
            <div className="md:w-1/2">
                <ul className="flex justify-evenly border border-black rounded gap-x-3 px-2">
                    {list.map((li) => (
                        <li key={li.id}><a href={li.link}>{li.name}</a></li>
                    ))}
                </ul>
            </div>
            {/* Cart */}
            <div className='group relative'>
                <button onClick={handleShowCart}><FontAwesomeIcon className='group-hover:scale-110 duration-300 ease-in-out' icon={faCartShopping} /><span className='hidden  group-hover:inline-flex absolute group-hover:translate-x-2'>Cart</span></button>
                <span className='bg-red-300 rounded-full absolute top-0 -left-2 text-xs px-1'>{cartCount}</span>
            </div>
            { isAuthenticated ? 
            (
            // log out   
            <div className='group'>
                <h1>{user.name}</h1>
                <button onClick={() => logout({ logoutParams: { returnTo: "https://a0z0ra25.github.io/cake_shop" } })}><FontAwesomeIcon className='group-hover:scale-110 duration-300 ease-in-out' icon={faRightFromBracket} /><span className='hidden  group-hover:inline-flex absolute group-hover:translate-x-2'>Log out</span></button>
            </div>
            
            ) : ( 
            //log in  
            <div className='group'>
                <button onClick={() => loginWithRedirect()}><FontAwesomeIcon className='group-hover:scale-110 duration-300 ease-in-out' icon={faRightToBracket} /><span className='hidden  group-hover:inline-flex absolute group-hover:translate-x-2'>Log in</span></button>
            </div>
            )} 
            
        </div>
    ) 
}
export default Navigation;