import './footer.css';
import { motion } from 'motion/react';
function Footer(){

    return(
        <div id='footer' className="h-full backdrop-blur-md text-white text-center w-full py-5">
            <motion.div 
                className='md:w-1/2 mx-4 backdrop-blur-lg px-1 py-1 rounded shadow-md md:mx-auto'
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                >
                <h1 className='text-xl font-semibold my-5 font-playfair'>About Sweet Cakes</h1>
                <p className='font-text font-semibold'>Sweet Bliss Cakes brings you the most delightful confections, baked with love and the finest ingredients. 
                    Whether it's a birthday, wedding, or any celebration, our cakes are designed to make every moment special.</p>
            </motion.div>
            <div  className='grid md:grid-cols-2 grid-cols-1 items-center'>
                <motion.div 
                    className='md:text-justify mx-auto my-3'
                    initial={{ y: 10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    >
                    <h1 className='md:text-2xl text-xl font-bold'>Get in touch</h1>
                    <ul className='font-text'>
                        <li>Address: 123 Sweet Street, Cake City, Pastryland</li>
                        <li>Phone: (123) 456-CAKE (2253)</li>
                        <li>Email: hello@sweetblisscakes.com</li>
                    </ul>
                </motion.div>
                <motion.div 
                    className='my-3 md:my-auto'
                    initial={{ y: 10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.5 }}>
                    <h1 className='md:text-2xl text-xl font-bold'>Follow Us:</h1>
                    <ul className='flex relative items-center justify-center'>
                        <li>Facebook</li>
                        <hr className='border border-white w-5 rotate-90' />
                        <li>Instagram</li>
                        <hr className='border border-white w-5 rotate-90' />
                        <li>Twitter</li>
                    </ul>
                </motion.div>
            </div>
        </div>
    )
}

export default Footer