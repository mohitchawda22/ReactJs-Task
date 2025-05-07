import React, { useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import "./Navbar.scss"
import Logo from "../../../assets/images/Logo.svg"
import profile from "../../../assets/images/profile.svg"

function Navbar() {
    const navigate = useNavigate()
    const login = localStorage.getItem('login')==="true"

    const Logout = () => {
        localStorage.removeItem('login')
        navigate('/home')
    }

    useEffect(() => {
        if (!login) {
            navigate('/home')
        }
    },[navigate,login])

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container">
                <NavLink className="navbar-brand" to={'/home'}>
                    <img src={Logo} alt="" width={150} />
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
                    <div className='d-flex justify-content-between nav-btn'>
                        <ul className='d-flex my-auto gap-4'>
                            {!login ? (
                                <>
                                    <li><NavLink className='login-btn' to={"/login"}>Login</NavLink></li>
                                    <li><NavLink className='signin-btn' to={"/signin"}>Sign In</NavLink></li>
                                </>
                            ) : (
                                <>
                                    <li><img src={profile} alt="" /></li>
                                    <li><NavLink className='signin-btn' onClick={Logout}>Logout</NavLink></li>
                                </>
                            )}

                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
