import { useState } from 'react'
import './App.css'
import Navigation from './components/navigation/navigation'
import Hero from './components/hero/hero'
import Products from './components/products/products'
import AboutUs from './components/about/about'
import Cart from './components/cart/cart'


function App() {

  const [cartCount, setCartCount] = useState(0);
  const [showCart, setShowCart] = useState(false);
  const [addCart, setAddCart] = useState([]);

  const handleAddCart = (cake) => {
    setAddCart((prevCart) => {
        const existCake = prevCart.findIndex((item) => item.id === cake.id);
        if (existCake >= 0) {
            const updatedCart = [...prevCart];
            updatedCart[existCake].quantity += 1;
            return updatedCart;
        } else {
            setCartCount(addCart.length + 1)
            return [...prevCart, { ...cake, quantity: 1 }];
        }
    });
};

  const handleIncrease = (each) => {
        setAddCart((prevCart) =>
            prevCart.map((item) =>
                item.id === each.id 
                    ? { ...item, quantity: item.quantity + 1 } 
                    : item
            )
        );
    };

  const handleDecrease = (each) => {
    setAddCart((prevCart) =>
        prevCart.map((item) =>
            item.id === each.id 
                ? { ...item, quantity: item.quantity - 1 } 
                : item
        )
    );
};

  function handleShowCart(){
    setShowCart(!showCart);
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
    <Cart handleIncrease={handleIncrease} handleCloseCart={handleCloseCart} showCart={showCart} addCart={addCart} />
    </>
  )
}

export default App
