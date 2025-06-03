import React, { useEffect, useRef, useState } from 'react'
import CategoryTab from '../Components/CategoryTab'
import ProductList from '../Components/ProductList'
import "../assets/styles/home.scss"
import ProductOffcanvas from '../Components/ProductOffcanvas';
import { useSelector } from 'react-redux';
import CartButton from '../Components/CartButton';
import { FormattedMessage } from 'react-intl';;
import "flag-icons/css/flag-icons.min.css";
import language from "../assets/lang.png"

function Home({ setLocale, locale }) {
  const cartItems = useSelector(state => state.cart.items || []);
  const [langcontaineropen, setLangContainerOpen] = useState(false)
  const dropdownRef = useRef()

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setLangContainerOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className='home-container'>
      <div className='home-header'>
        <div className='lang-btn-container' ref={dropdownRef}>
          <button className='lang-btn' onClick={() => setLangContainerOpen(!langcontaineropen)}>
            <img src={language} alt="" width={24}/>
          </button>
          {langcontaineropen && (
            <div className='lang-modal-overlay'>
              <div className='lang-modal'>
                <h2>Select Your Language</h2>
                <div className='lang-btns'>
                  <div onClick={() => { setLocale("en"); setLangContainerOpen(false); }} className={locale === 'en' ? "active" : ""}><span className="fi fi-us"></span><FormattedMessage id='home.language.english' /></div>
                  <div onClick={() => { setLocale("fr"); setLangContainerOpen(false); }} className={locale === 'fr' ? "active" : ""}><span className="fi fi-fr"></span><FormattedMessage id='home.language.french' /></div>
                  <div onClick={() => { setLocale("hindi"); setLangContainerOpen(false); }} className={locale === 'hindi' ? "active" : ""}><span className="fi fi-in"></span><FormattedMessage id='home.language.hindi' /></div>
                  <div onClick={() => { setLocale("de"); setLangContainerOpen(false); }} className={locale === 'de' ? "active" : ""}><span className="fi fi-de"></span><FormattedMessage id='home.language.german' /></div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className='home-header-title'>
          <h2><FormattedMessage id='home.title' /></h2>
          <p><FormattedMessage id='home.address.line1' /></p>
          <p><FormattedMessage id='home.address.line2' /></p>
        </div>
      </div>
      <CategoryTab />
      <ProductList />
      <ProductOffcanvas />
      {cartItems.length > 0 && (
        <div>
          <CartButton />
        </div>
      )}
    </div>
  );
}

export default Home
