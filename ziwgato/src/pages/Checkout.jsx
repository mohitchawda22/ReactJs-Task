import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../assets/styles/checkout.scss';
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { clearCart } from '../redux/constants/cartActionTypes';
import { FormattedMessage } from 'react-intl'
import like from "../assets/like.png"
import { cartTotal } from '../utils/cartTotal';

function Checkout() {
  const navigate = useNavigate()
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch()
  const [notes, setNotes] = useState('');
  const [tableNumber, setTableNumber] = useState(Math.floor(Math.random() * 10 + 1));
  const [confirmContainer, setConfirmContainer] = useState(false)


  const groupedItems = cartItems.reduce((acc, item) => {
    const cat = item.category || "others"
    if (!acc[cat]) { acc[cat] = [] }
    acc[cat].push(item)
    return acc
  }, {})

  const onBack = () => {
    navigate("/")
  }
  const onConfirm = () => {
    setConfirmContainer(!confirmContainer)
  }

  const totalPrice = cartItems.reduce((sum, item) => sum + cartTotal(item), 0);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <IoIosArrowBack className="back-icon" onClick={onBack} />
        <h2 className='checkout-title'><FormattedMessage id="checkout.title" /></h2>
        <span className="menu-dots">⋯</span>
      </div>

      <div className="venue-info">
        <strong><FormattedMessage id='checkout.venue' /></strong>
        <p><FormattedMessage id='checkout.address' /></p>
      </div>

      <div className="category-block">
        {Object.entries(groupedItems).map(([category, items]) => (
          <div key={category}>
            <h3 className=''>
              {category === "others" ? "Other Items" : category} ({items.length})
            </h3>
            {items.map((item, index) => (
              <div key={index} className="item-row">
                <div>
                  <strong>{item.name}</strong>
                  {item.variant && (
                    <span className='item-variant'>
                      ({typeof item.variant === "string" ? item.variant : item.variant.name})
                    </span>
                  )}
                  {item.extras && Array.isArray(item.extras) && (
                    <ul className="extras-list">
                      {item.extras.map((extra, i) => (
                        <li key={i}>{extra.name},</li>
                      ))}
                    </ul>
                  )}
                </div>
                <div className='item-price'>
                  £{cartTotal(item).toFixed(2)}
                  {item.quantity > 1 && <span> x{item.quantity}</span>}
                </div>
              </div>
            ))}
          </div>
        ))}
        <div className="divider" />
        <div className="notes-block">
          <label htmlFor="notes"><strong><FormattedMessage id='checkout.addNotes' />:</strong></label>
          <textarea
            id="notes"
            rows="3"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </div>
      </div>

      <div className="table-number">
        <span><FormattedMessage id='checkout.tableNumber' />:</span>
        <input
          type="number"
          value={tableNumber}
          onChange={(e) => setTableNumber(e.target.value)}
        />
      </div>
      <div className="confirm-bar">
        <button onClick={onConfirm}>
          <FormattedMessage id='checkout.confirmOrder' />
          <br />
          £{totalPrice.toFixed(2)} / {totalItems} ITEM{totalItems > 1 ? 'S' : ''}
        </button>

        {confirmContainer && (
          <div className="custom-modal-overlay" onClick={() => setConfirmContainer(false)}>
            <div className="custom-modal" onClick={e => e.stopPropagation()}>
              <h2>Confirm Order</h2>
              <img src={like} alt="" width={100} />
              <p>
                By placing this order you agree that you are present in Kings Arms and over 18 years old.
              </p>
              <div className="modal-btns">
                <button
                  className="cancel-btn" onClick={()=>setConfirmContainer(false)}
                >
                 Cancel 
                </button>
                <button
                  className="place-btn" onClick={() => {
                    dispatch(clearCart()); navigate('/');
                  }}
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Checkout;
