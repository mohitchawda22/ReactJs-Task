import React from 'react'
import CategoryTab from '../Components/CategoryTab'
import ProductList from '../Components/ProductList'
import "../assets/styles/home.scss"
import ProductOffcanvas from '../Components/ProductOffcanvas';
import { useSelector } from 'react-redux';
import FloatingCartButton from '../Components/CartButton';
import { FormattedMessage } from 'react-intl';

function Home({setLocale ,locale}) {
  const cartItems = useSelector(state => state.cart.items || []);
  return (
    <div className='home-container'>
      <div className='home-header'>
        <div className='home-header-title'>
          <h2><FormattedMessage id='home.title'/></h2>
          <p><FormattedMessage id='home.address.line1'/></p>
          <p><FormattedMessage id='home.address.line2'/></p>
          <select onChange={(e) => setLocale(e.target.value)} value={locale}>
            <option value="en"><FormattedMessage id='home.language.english'/></option>
            <option value="fr"><FormattedMessage id='home.language.french'/></option>
          </select>
        </div>
      </div>
      <CategoryTab />
      <ProductList />
      <ProductOffcanvas />
      {cartItems.length > 0 && (
        <div>
          <FloatingCartButton />
        </div>
      )}
    </div>
  );
}

export default Home
