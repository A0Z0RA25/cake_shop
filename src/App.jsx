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
  const [addCart, setAddCart] = useState([
    {name: "Ice Cream", quantity: 1}
  ]);

  const handleAddCart = (cake) => {
    setAddCart((prevCart) => {
        const existingProductIndex = prevCart.findIndex((item) => item.id === cake.id);
        if (existingProductIndex >= 0) {
            const updatedCart = [...prevCart];
            updatedCart[existingProductIndex].quantity += 1; // Increment quantity
            return updatedCart;
        } else {
            return [...prevCart, { ...cake, quantity: 1 }]; // Add new product
        }
    });
};

    function handleShowCart(){
      setShowCart(!showCart);
    }

    function handleCloseCart(){
      setShowCart(false)
    }

  return(
    <>
    <Navigation cart={cart} handleShowCart={handleShowCart}  />
    <Hero />
    <AboutUs />
    <Products handleAddCart={handleAddCart} />
    <Cart handleCloseCart={handleCloseCart} showCart={showCart} addCart={addCart} />
    </>
  )
}

export default App
