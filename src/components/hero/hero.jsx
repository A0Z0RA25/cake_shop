import cake1 from './cake1.png';
import { motion } from 'motion/react';
import './hero.css';
function Hero(){

    return(
        <div id='home-page' className=' md:flex grid grid-cols-1 group px-5 py-10 md:py-0 justify-around min-h-svh h-full bg-homeBg'>
            <div className='md:w-1/2 md:mt-32 md:ml-20 grid order-2 m d:order-2 h-fit'>
                <motion.h1 
                    className='md:text-5xl text-3xl font-bold font-header'
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    Baking <span className='text-white'>Dreams</span> into reality
                </motion.h1>
                <motion.p 
                    className='font-text text-white md:text-xl h-fit'
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    >
                        Lorem ipmus dolor sit amet consterustara impus dolor sit adipicing elit
                </motion.p>
                <motion.div 
                    className='h-fit md:mt-16'
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.5 }}
                >
                    <button className='border hover:scale-105 duration-500 ease-in-out bg-white border-black px-3 py-1 mx-2 shadow-sm rounded-lg'>
                        <a href="#product">Explore More</a>
                    </button>
                    <button className='border hover:scale-105 duration-500 ease-in-out bg-banner text-white hover:text-white font-serif border-black px-3 py-1 shadow-sm rounded-lg'>Order Now</button>
                </motion.div>
            </div>
            <motion.div 
                className='md:order-2 md:m-auto'
                initial={{ x: 10, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 2.5 }}
                >
                <img className='' src={cake1} alt="" />
            </motion.div>
        </div>
    )
}

export default Hero;