import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../assets/styles/checkout.scss';
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { clearCart } from '../redux/constants/cartActionTypes';
import { FormattedMessage} from 'react-intl'

function Checkout() {
  const navigate=useNavigate()
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch=useDispatch()
  const [notes, setNotes] = useState('');
  const [tableNumber, setTableNumber] = useState(Math.floor(Math.random()*10 +1));

  const category = useSelector(state=>state.product.selectedCategory);
  const groupedItems = cartItems.reduce((acc, item) => {
    if (!acc[category]) acc[category] = [];
    acc[category].push(item);
    return acc;
  }, {});

  const onBack=()=>{
    navigate("/")
  }
  const onConfirm=()=>{
    dispatch(clearCart())
    navigate("/")
  }

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <IoIosArrowBack className="back-icon" onClick={onBack} />
        <h2><FormattedMessage id="checkout.title" /></h2>
        <span className="menu-dots">⋯</span>
      </div>

      <div className="venue-info">
        <strong><FormattedMessage id='checkout.venue'/></strong>
        <p><FormattedMessage id='checkout.address'/></p>
      </div>

      {Object.entries(groupedItems).map(([category, items]) => (
        <div className="category-block" key={category}>
          {items.map((item, index) => (
            <div key={index} className="item-row">
              <div>
              <h3>{category} ({items.length})</h3>
                <strong>{item.name}</strong>
                {typeof item.variant === 'string' && <p>{item.variant}</p>}
                {item.extras && Array.isArray(item.extras) && (
                  <ul className="extras-list">
                    {item.extras.map((extra, i) => (
                      <li key={i}>{extra.name} (+£{extra.price.toFixed(2)})</li>
                    ))}
                  </ul>
                )}
              </div>
              <div>£{item.price.toFixed(2)}</div>
            </div>
          ))}
        </div>
      ))}

      <div className="divider" />

      <div className="notes-block">
        <label htmlFor="notes"><strong><FormattedMessage id='checkout.addNotes'/>:</strong></label>
        <textarea
          id="notes"
          rows="3"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
      </div>


      <div className="confirm-bar">
      <div className="table-number">
        <span><FormattedMessage id='checkout.tableNumber'/>:</span>
        <input
          type="number"
          value={tableNumber}
          onChange={(e) => setTableNumber(e.target.value)}
        />
      </div>
        <button onClick={onConfirm}>
          <FormattedMessage id='checkout.confirmOrder'/>
          <br />
          £{totalPrice.toFixed(2)} / {cartItems.length} ITEM{cartItems.length > 1 ? 'S' : ''}
        </button>
      </div>
    </div>
  );
}

export default Checkout;
