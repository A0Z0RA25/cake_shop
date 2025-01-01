import { useState } from 'react';
import './App.css';
import Navigation from './components/navigation/navigation';
import Hero from './components/hero/hero';
import Products from './components/products/products';
import AboutUs from './components/about/about';
import Cart from './components/cart/cart';

function App() {

  const [cartCount, setCartCount] = useState(0);
  const [showCart, setShowCart] = useState(false);
  const [addCart, setAddCart] = useState([]);

  const handleAddCart = (cake) => {
    const exist = addCart.find((currElem) => {
      return currElem.id === cake.id
    })
    if(exist){
      alert("This is already in the cart.")
    } else{
      setAddCart([...addCart, {...cake, quantity: 1}])
      alert("Added to the cart.")
      setCartCount(addCart.length + 1)
    }
};

  function handleShowCart(){
    setShowCart(!showCart);
    console.log("working")
  }

  function handleCloseCart(){
    setShowCart(false)
  }

  return(
    <>
    <Navigation cartCount={cartCount} handleShowCart={handleShowCart}  />
    <Hero />
    <AboutUs />
    <Products handleAddCart={handleAddCart} />
    <Cart cartCount={cartCount} setCartCount={setCartCount} handleCloseCart={handleCloseCart} showCart={showCart} setAddCart={setAddCart} addCart={addCart} />
    </>
  )
}

export default App
