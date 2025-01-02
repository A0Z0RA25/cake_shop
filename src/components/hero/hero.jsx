import cake1 from './cake1.png';
import './hero.css';
function Hero(){

    return(
        <div id='home-page' className='text-white md:flex grid grid-cols-1 group px-5 justify-evenly items-center min-h-svh h-full'>
            <div className='md:w-1/2 text-center mt-20 grid grid-rows-3 md:gap-2 order-2 md:order-1'>
                <h1 className='md:text-3xl font-serif font-bold '>
                    Baking Dreams into reality
                </h1>
                <p>Lorem ipmus dolor sit amet consterustara
                    impus dolor sit adipicing elit
                </p>
                <div className='mx-auto'>
                    <button className='border hover:scale-105 duration-500 ease-in-out bg-btn hover:bg-orange-400 hover:text-white border-black px-3 py-1 mx-2 shadow-sm rounded-lg'>Explore More</button>
                    <button className='border hover:scale-105 duration-500 ease-in-out bg-btn hover:bg-orange-400 hover:text-white font-serif border-black px-3 py-1 shadow-sm rounded-lg'>Order Now</button>
                </div>
            </div>
            
        </div>
    )
}

export default Hero;