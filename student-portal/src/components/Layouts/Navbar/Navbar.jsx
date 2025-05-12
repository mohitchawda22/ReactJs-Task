import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import "./Navbar.scss"

function Navbar() {

  return (
    <nav className='container'>
    <div className='d-flex justify-content-between mt-1 navbar'>
      Navbar
      <div className='d-flex justify-content-center'>
        <ul className='d-flex gap-4'>
            <li className='nav-links'><Link to={'/'} className='text-decoration-none'>Home</Link></li>
            <li className='nav-links'><Link to={'/dashboard'} className='text-decoration-none'>Dashboard</Link></li>
            <li className='nav-links'><Link to={'/login'} className='text-decoration-none'>Login</Link></li>
        </ul>
      </div>
    </div>
    </nav>
  )
}

export default Navbar
