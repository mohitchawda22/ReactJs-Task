import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <footer className="py-4 bg-dark text-white">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p className="mb-0">© 2023 KF+ FURNITURE. All Rights Reserved</p>
            </div>
            <div className="col-md-6 text-md-end">
              <Link to={'/about'} className="text-white me-3">
                About Us
              </Link>
              <Link to={'/contact'} className="text-white me-3">
                Contact
              </Link>
              <Link to={'/privacy-policy'} className="text-white">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
