import { useState } from 'react'
import './App.css'
import Navigation from './components/navigation/navigation'
import Hero from './components/hero/hero'
import Products from './components/products/products'

function App() {
  
  return(
    <>
    <Navigation />
    <Hero />
    <Products />
    </>
  )
}

export default App
