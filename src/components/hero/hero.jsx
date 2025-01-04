import cake1 from './cake1.png';
import './hero.css';
function Hero(){

    return(
        <div id='home-page' className=' md:flex grid grid-cols-1 group px-5 py-10 md:py-0 justify-around min-h-svh h-full bg-homeBg'>
            <div className='md:w-1/2 md:mt-32 md:ml-20 grid order-2 m d:order-2 h-fit'>
                <h1 className='md:text-5xl text-3xl font-bold font-header'>
                    Baking <span className='text-white'>Dreams</span> into reality
                </h1>
                <p className='font-text text-white md:text-xl h-fit'>Lorem ipmus dolor sit amet consterustara
                    impus dolor sit adipicing elit
                </p>
                <div className='h-fit md:mt-16'>
                    <button className='border hover:scale-105 duration-500 ease-in-out bg-white hover:bg-orange-400 hover:text-white border-black px-3 py-1 mx-2 shadow-sm rounded-lg'>
                        <a href="#product">Explore More</a>
                    </button>
                    <button className='border hover:scale-105 duration-500 ease-in-out bg-banner text-white hover:bg-orange-400 hover:text-white font-serif border-black px-3 py-1 shadow-sm rounded-lg'>Order Now</button>
                </div>
            </div>
            <div className='md:order-2 md:m-auto'>
                <img className='' src={cake1} alt="" />
            </div>
        </div>
    )
}

export default Hero;