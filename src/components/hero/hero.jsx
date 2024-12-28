import cake1 from './cake1.png';
function Hero(){

    return(
        <div id='home-page' className='md:flex grid grid-cols-1 group px-5 justify-evenly items-center min-h-svh h-full bg-blue'>
            <div className='md:w-1/2 grid grid-rows-3 gap-2 order-2 md:order-1'>
                <h1 className='md:text-3xl font-serif font-bold '>
                    Baking Dreams into reality
                </h1>
                <p>Lorem ipmus dolor sit amet consterustara
                    impus dolor sit adipicing elit
                </p>
                <div className='flex text-left h-1/2'>
                    <button className='border hover:-translate-y-2 duration-500 ease-in-out bg-btn hover:bg-orange-400 hover:text-white border-black px-3 mx-2 shadow-sm rounded-lg'>Explore More</button>
                    <button className='border hover:-translate-y-2 duration-500 ease-in-out bg-btn hover:bg-orange-400 hover:text-white text-[13px] font-serif border-black px-3 shadow-sm rounded-lg'>Order Now</button>
                </div>
            </div>
            {/*images container*/}
            <div className='order-1 md:order-2'>
                <img className='md:w-[300px] md:h-[250px] w-[250px] h-[220px] mx-auto' src={cake1} alt="" />
            </div>
        </div>
    )
}

export default Hero;