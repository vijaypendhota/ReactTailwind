import React from 'react'
import NavBar from './components/NavBar'
import HeroSection from './HeroSection'
import ProductComponents from './ProductComponents'

const LandingPage = () => {
  return (
    <div>
      <NavBar/>
      <HeroSection/>
      <ProductComponents/>
    </div>
  )
}

export default LandingPage;