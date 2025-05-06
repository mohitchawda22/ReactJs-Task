import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.scss"
import Logo from "../../../assets/images/Logo.svg"
import logo1 from "../../../assets/images/wrap.svg"
import profile from "../../../assets/images/profile.svg"
function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container">
                <NavLink className="navbar-brand" to={'/home'}>
                    <img src={Logo} alt="" />
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" to={'/home'}>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={'/about'}>About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={'/contact'}>Contact</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={'/product'}>Product</NavLink>
                        </li>
                    </ul>
                    <div className='d-flex justify-content-between gap-4'>
                        <img src={logo1} alt="" />
                        <img src={profile} alt="" />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
