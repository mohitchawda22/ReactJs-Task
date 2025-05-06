import React from 'react'
import heroimg from "../../../assets/images/heroimg.png"
import { useNavigate } from 'react-router-dom'

function HeroSection() {
  const navigate=useNavigate()
  const handleProduct=()=>{
    navigate('/product')
  }
  return (
    <section className="py-5" style={{ backgroundColor: "#FFE4E1" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className="fw-bold text-warning">Help You To Make Modern Furniture</h1>
              <p className="text-muted my-4">
                We help you to create gorgeous your room to be more cozy, stylish by professional interior
              </p>
              <button className="btn btn-warning text-white px-4 py-2" onClick={handleProduct}>Order Product</button>
            </div>
            <div className="col-md-6">
              <img
                src={heroimg}
                width={500}
                height={400}
                alt="Modern living room"
                className="img-fluid rounded"
              />
            </div>
          </div>
        </div>
      </section>
  )
}

export default HeroSection
