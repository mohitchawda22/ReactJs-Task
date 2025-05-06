import React from 'react'
import HeroSection from '../../components/Layouts/HeroSection/HeroSection'
import CompanySection from '../../components/Layouts/Companies/CompanySection'
import Showcase from '../../components/Layouts/Showcase/Showcase'
import ProductSection from '../../components/Layouts/ProductSection/ProductSection'

function Home() {
  return (
   <>
    <HeroSection></HeroSection>
    <CompanySection></CompanySection>
    <Showcase></Showcase>
    <ProductSection></ProductSection>
   </>
  )
}

export default Home
