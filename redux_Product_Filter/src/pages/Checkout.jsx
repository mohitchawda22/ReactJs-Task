import { Toast } from 'bootstrap'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { clearCart} from '../redux/actions/cartAction'

function Checkout() {
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const [address,setAddress]=useState('')

    const handlePlaceOrder=()=>{
        if(address.trim()==="")return toast.warning("please enter Address")
        dispatch(clearCart())
        navigate('/order-summary',{state:{address}})
    }
  return (
     <div className="container my-5" style={{ maxWidth: "720px" }}>
      <h2 className="mb-4">Checkout</h2>
      <div className="mb-3">
        <label htmlFor="address" className="form-label">Shipping Address</label>
        <textarea
          className="form-control"
          id="address"
          rows="3"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        ></textarea>
      </div>
      <button className="btn btn-success w-100" onClick={handlePlaceOrder} >
        Place Order
      </button>
    </div>
  )
}

export default Checkout
