import React, { useContext, useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { ThemeContext } from '../../context/ThemeProvider'
import { useSelector } from 'react-redux'
import MiniCart from '../MiniCart/MiniCart'
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher'

function Navbar() {
  const { theme } = useContext(ThemeContext)
  const cartItem = useSelector(state => state.cart.items)
  const cartCount = cartItem.length
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showMiniCart, setShowMiniCart] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <nav className={`navbar navbar-expand-lg ${theme === "dark" ? "navbar-dark bg-dark" : "navbar-light bg-light"} py-3 shadow-sm ${isScrolled ? 'sticky-top' : ''}`}>
      <div className="container">
        <NavLink className="navbar-brand fs-3 fw-bold" to="/">ShopApp</NavLink>

        <div className="d-flex order-lg-2 ms-auto">
          <div
            className="d-flex align-items-center position-relative me-3"
            onMouseEnter={() => setShowMiniCart(true)}
            onMouseLeave={() => setShowMiniCart(false)}
          >
            <button className="btn position-relative">
              <i className={`bi bi-bag ${theme === "dark" ? "text-white" : "text-black"}`} />
              {cartCount > 0 && (
                <span className="badge bg-danger position-absolute top-0 start-100 translate-middle">
                  {cartCount}
                </span>
              )}
            </button>
            <div className="me-4">
              {showMiniCart && <MiniCart onClose={() => setShowMiniCart(false)} />}
            </div>
          </div>
          <ThemeSwitcher />
          <button className="navbar-toggler border-0" type="button" onClick={toggleMenu}>
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        <div className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}>
          <ul className="navbar-nav mx-auto">
              <Link className="nav-link" to="/" role="button">
                Home
              </Link>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown">
                Latest
              </a>
              <ul className="dropdown-menu">
                <li><NavLink className="dropdown-item" to="/products" onClick={closeMenu}>New Arrivals</NavLink></li>
                <li><NavLink className="dropdown-item" to="/products" onClick={closeMenu}>Best Sellers</NavLink></li>
                <li><NavLink className="dropdown-item" to="/products" onClick={closeMenu}>Trending Now</NavLink></li>
              </ul>
            </li>

        
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown">
                Collection
              </a>
              <ul className="nav-item dropdown-menu">
                <li><NavLink className="dropdown-item" to="/products" onClick={closeMenu}>Summer Collection</NavLink></li>
                <li><NavLink className="dropdown-item" to="/products" onClick={closeMenu}>Winter Collection</NavLink></li>
                <li><NavLink className="dropdown-item" to="/products" onClick={closeMenu}>Special Offers</NavLink></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown">
                Categories
              </a>
              <ul className="dropdown-menu">
                <li><NavLink className="dropdown-item" to="/products" onClick={closeMenu}>Women</NavLink></li>
                <li><NavLink className="dropdown-item" to="/products" onClick={closeMenu}>Men</NavLink></li>
                <li><NavLink className="dropdown-item" to="/products" onClick={closeMenu}>Accessories</NavLink></li>
                <li><NavLink className="dropdown-item" to="/products" onClick={closeMenu}>Footwear</NavLink></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown">
                Pages
              </a>
              <ul className="dropdown-menu">
                <li><NavLink className="dropdown-item" to="/about" onClick={closeMenu}>About Us</NavLink></li>
                <li><NavLink className="dropdown-item" to="/contact" onClick={closeMenu}>Contact Us</NavLink></li>
                <li><NavLink className="dropdown-item" to="/faq" onClick={closeMenu}>FAQ</NavLink></li>
                <li><NavLink className="dropdown-item" to="/terms" onClick={closeMenu}>Terms & Conditions</NavLink></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown">
                Blog
              </a>
              <ul className="dropdown-menu">
                <li><NavLink className="dropdown-item" to="/blog" onClick={closeMenu}>Blog Grid</NavLink></li>
                <li><NavLink className="dropdown-item" to="/blog" onClick={closeMenu}>Blog List</NavLink></li>
                <li><NavLink className="dropdown-item" to="/blog/1" onClick={closeMenu}>Blog Single</NavLink></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
