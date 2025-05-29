import React from 'react'
import CategoryTab from '../Components/CategoryTab'
import ProductList from '../Components/ProductList'
import "../assets/styles/home.scss"
import ProductOffcanvas from '../Components/ProductOffcanvas';

function Home() {
  return (
    <div className='home-container'>
      <div className='home-header'>
        <div className='home-header-title'>
          <h2>Kings Arms Cardington</h2>
          <p>134 High Street, Kempston, Bedford,</p>
          <p>Bedfordshire, MK42 7BN</p>
        </div>
      </div>
      <CategoryTab />
      <ProductList />
      <ProductOffcanvas/>
    </div>
  );
}

export default Home
