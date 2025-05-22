import React from 'react'
import { Link } from 'react-router-dom'

function ExclusiceCollection() {
  return (
     <div className="position-relative">
      <div className="position-relative" style={{ height: "600px" }}>
        <img
          src="https://www.pxdraft.com/wrap/shopapp/assets/img/fashion/home-banner-1.jpg"
          alt="Exclusive Collection"
          fill
          style={{ objectFit: "cover", width:"100vw" }}
        />
        <div
          className="position-absolute top-0 start-0 end-0 bottom-0 d-flex flex-column justify-content-center align-items-center text-white text-center"
          style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
        >
          <p className="mb-2">Hurry up! Limited time offer</p>
          <h2 className="display-3 fw-bold mb-2">New Exclusive</h2>
          <h2 className="display-3 fw-bold mb-4">2025 Collection</h2>
          <Link to="/products" className="btn btn-outline-light px-4 py-2">
            Discover More
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ExclusiceCollection
