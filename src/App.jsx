import { useState } from 'react'
import './App.css'
import Navigation from './components/navigation/navigation'
import Hero from './components/hero/hero'
import Products from './components/products/products'
import AboutUs from './components/about/about'

function App() {

  const [cart, setCart] = useState(0);

    function handleCart(e){
        setCart(cart + 1)
    }

  return(
    <>
    <Navigation cart={cart} />
    <Hero />
    <AboutUs />
    <Products handleCart={handleCart} />
    </>
  )
}

export default App
