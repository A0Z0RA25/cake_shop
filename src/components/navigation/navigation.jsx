import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faCakeCandles } from '@fortawesome/free-solid-svg-icons';
function Navigation({cart, handleShowCart}){

    const list = [
        {id: 1, name: "Home", link: "#home-page"},
        {id: 2, name: "Products", link: "#cake-container"},
        {id: 3, name: 'About Us', link: '#aboutUs'},
        {id: 4, name: "Contact", link: "#"}
    ];

    return(
        <div className="fixed w-svw flex flex-wrap justify-evenly items-center gap-x-2">
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
                <span className='bg-red-300 rounded-full absolute top-0 -left-2 text-xs px-1'>{cart}</span>
            </div>
            {/* Account */}
            <div className='group'>
            <a href=""><FontAwesomeIcon className='group-hover:scale-110 duration-300 ease-in-out' icon={faUser} /><span className='hidden  group-hover:inline-flex absolute group-hover:translate-x-2'>User</span></a>
            </div>  
        </div>
    ) 
}
export default Navigation;