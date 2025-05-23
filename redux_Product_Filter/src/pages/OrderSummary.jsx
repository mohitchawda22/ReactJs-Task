import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function OrderSummary() {
    const location=useLocation()
    const navigate=useNavigate()
    const address=location?.state?.address

    const handleNavigate=()=>{
        navigate('/products')
    }
  return (
     <div className="container my-5 text-center">
      <h2 className="text-success">✅ Order Placed Successfully!</h2>
      <p className="mt-3">Your items will be delivered to:</p>
      <div className="alert alert-secondary mx-auto" style={{ maxWidth: "500px" }}>
        {address || "No address provided"}
      </div>
      <button className="btn btn-primary mt-4" onClick={handleNavigate}>Continue Shopping</button>
    </div>
  )
}

export default OrderSummary
