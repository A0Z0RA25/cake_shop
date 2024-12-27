import { useState } from 'react'
import './App.css'
import Navigation from './components/navigation/navigation'
import Hero from './components/hero/hero'
import Products from './components/products/products'
import AboutUs from './components/about/about'
import Cart from './components/cart/cart'

function App() {

  const [cart, setCart] = useState(0);
  const [showCart, setShowCart] = useState(false);
  const [addCart, setAddCart] = useState([]);

    function handleAddCart(cake){
        setAddCart((eachItem) => [...eachItem, cake])
    }

    function handleShowCart(){
      setShowCart(!showCart);
    }

  return(
    <>
    <Navigation cart={cart} handleShowCart={handleShowCart}  />
    <Hero />
    <AboutUs />
    <Products handleAddCart={handleAddCart} />
    <Cart showCart={showCart} addCart={addCart} />
    </>
  )
}

export default App
