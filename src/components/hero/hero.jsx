import cake1 from './cake1.png';
import './hero.css';
function Hero(){

    return(
        <div id='home-page' className=' md:flex grid grid-cols-1 group px-5 justify-around items-center min-h-svh h-full bg-homeBg'>
            <div className='md:w-1/2 text-center mt-20 md:ml-20 grid grid-rows-3 md:gap-2 order-2 m d:order-1'>
                <h1 className='md:text-5xl font-bold font-playfair mt-5'>
                    Baking <span className='text-white'>Dreams</span> into reality
                </h1>
                <p className='font-text text-xl'>Lorem ipmus dolor sit amet consterustara
                    impus dolor sit adipicing elit
                </p>
                <div className='mx-auto'>
                    <button className='border hover:scale-105 duration-500 ease-in-out bg-white hover:bg-orange-400 hover:text-white border-black px-3 py-1 mx-2 shadow-sm rounded-lg'>
                        <a href="#product">Explore More</a>
                    </button>
                    <button className='border hover:scale-105 duration-500 ease-in-out bg-banner text-white hover:bg-orange-400 hover:text-white font-serif border-black px-3 py-1 shadow-sm rounded-lg'>Order Now</button>
                </div>
            </div>
            <div className='order-2 md:ml-32'>
                <img className='' src={cake1} alt="" />
            </div>
        </div>
    )
}

export default Hero;