import React from 'react'
import Header2 from '../Components/Header2' // default import not need curly braces
// importing normal functions to git
import Products from '../Components/Products'
import Hero from '../Components/Hero';

const Home = () => {
  return (
    <div>
      <Hero/>
      <Products/>
    </div>
  )
}

export default Home
