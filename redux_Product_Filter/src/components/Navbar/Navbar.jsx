import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher'
import { ThemeContext } from '../../context/ThemeProvider'

function Navbar() {
  const {theme}=useContext(ThemeContext)
  return (
    <nav className={`navbar navbar-expand-lg ${theme==="dark" ?"navbar-dark bg-dark" :"navbar-light bg-light"}`}>
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
                    <div className='d-flex justify-content-between nav-btn'>
                        <ul className='d-flex my-auto gap-4'>
                            <ThemeSwitcher/>
                        </ul>
                        </div>
                </div>
            </div>
        </nav>
  )
}

export default Navbar
