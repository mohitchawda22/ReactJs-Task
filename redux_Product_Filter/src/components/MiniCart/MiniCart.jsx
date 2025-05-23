import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { clearCart, decreaseQuantity, increaseQuantity } from '../../redux/actions/cartAction'
import { ThemeContext } from '../../context/ThemeProvider'
import { toast } from 'react-toastify'

function MiniCart({onClose}) {

    const dispatch=useDispatch()
    const navigate=useNavigate()
    const items=useSelector(state=>state.cart.items)
    const {theme}=useContext(ThemeContext)
    const handleNavigate=()=>{
        onClose()
        navigate("/cart")
    }

    const DecreaseQuantity=(id)=>{
        dispatch(decreaseQuantity(id))
    }

    const IncreaseQuantity=(id)=>{
        dispatch(increaseQuantity(id))
    }
    const ClearAll=()=>{
        toast.error("Cart empty!")
        dispatch(clearCart())
    }
  return (
    <div
      className={`position-absolute border p-3 shadow ${theme==="light"?"light":"dark"}`}
      style={{ width: '300px', top: '100%', right: 0, zIndex: 999 }}
      onMouseLeave={onClose}
    >
      <h6 className="mb-2"> <i className={`bi bi-bag me-1 ${theme==="dark"?"text-white":"text-black"}`}/>Cart Items</h6>
      {items.length === 0 ? (
        <p className="text-muted">Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items" style={{ maxHeight: '200px', overflowY: 'auto' }}>
            {items.map(item => (
              <div key={item.id} className="d-flex justify-content-between align-items-center mb-2">
                <div className="flex-grow-1 me-2"><img src={item.image} alt="" height={50} width={50}/></div>
                <div className="flex-grow-1 me-2">{item.title}</div>
                <div className="d-flex align-items-center">
                  <button className="btn btn-sm btn-outline-secondary" onClick={()=>DecreaseQuantity(item.id)}>-</button>
                  <span className="mx-2">{item.quantity}</span>
                  <button className="btn btn-sm btn-outline-secondary" onClick={()=>IncreaseQuantity(item.id)}>+</button>
                </div>
              </div>
            ))}
          </div>
          <button className='btn btn-danger btn-sm w-50 mt-2' onClick={()=>ClearAll()}>Clear All</button>
          <button className="btn btn-primary w-100 mt-3" onClick={handleNavigate}>
            Go to Cart
          </button>
        </>
      )}
    </div>
  )
}

export default MiniCart
