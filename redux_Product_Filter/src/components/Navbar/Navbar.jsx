import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher'
import { ThemeContext } from '../../context/ThemeProvider'
import { useSelector } from 'react-redux'
import MiniCart from '../MiniCart/MiniCart'

function Navbar() {
    const { theme } = useContext(ThemeContext)
    const cartItem=useSelector(state=>state.cart.items)
    const cartCount=cartItem.length
    // const cartCount = useSelector((state) =>
    //     state.cart?.items?.reduce((sum, item) => sum + item.quantity, 0) ?? 0
    // )
    const [showMiniCart, setShowMiniCart] = useState(false)

    // const navigate = useNavigate()

    // const NavigateTocart = () => {
    //     navigate("/cart")
    // }
    return (
        <nav className={`navbar navbar-expand-lg ${theme === "dark" ? "navbar-dark bg-dark" : "navbar-light bg-light"}`}>
            <div className="container">
                <NavLink className="navbar-brand" to={'/'}>
                    Store
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" to={'/'}>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={'/products'}>Products</NavLink>
                        </li>
                    </ul>
                    <div className="d-flex align-items-center position-relative" onMouseEnter={() => setShowMiniCart(true)} onMouseLeave={() => setShowMiniCart(false)}>
                        <button className="btn position-relative">
                           <i className={`bi bi-bag ${theme==="dark"?"text-white":"text-black"}`}/>
                            {cartCount > 0 && (
                                <span className="badge bg-danger position-absolute top-0 start-100 translate-middle">
                                    {cartCount}
                                </span>
                            )}
                        </button>
                        <div className='me-4 '>
                            {showMiniCart && <MiniCart onClose={() => setShowMiniCart(false)} />}
                        </div>
                    </div>
                    <ThemeSwitcher />
                    {/* <div className='d-flex justify-content-between nav-btn'>
                        <ul className='d-flex my-auto gap-4'>
                            <span>{cartCount}</span>
                            <ThemeSwitcher/>
                        </ul>
                        </div> */}
                </div>
            </div>
        </nav>
    )
}

export default Navbar
