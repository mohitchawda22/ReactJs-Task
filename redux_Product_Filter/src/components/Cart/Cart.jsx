import { useDispatch, useSelector } from 'react-redux';
import { decreaseQuantity, increaseQuantity, removeFromCart } from '../../redux/actions/cartAction';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const [coupon, setCoupon] = useState('');
  const [discount, setDiscount] = useState(0);
  const navigate = useNavigate();

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discountedTotal = subtotal - (subtotal * discount) / 100;

  const IncreaseQuantity = (id) => {
    dispatch(increaseQuantity(id));
    toast.success("Quantity increased");
  };

  const DecareseQuantity = (id) => {
    dispatch(decreaseQuantity(id));
    toast.info("Quantity decreased");
  };

  const RemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
    toast.error("Item removed from cart");
  };

  const handleCouponApply = () => {
    if (coupon.toLowerCase() === "save10") {
      setDiscount(10);
      toast.success("Coupon applied: 10% OFF");
    } else {
      toast.warning("Invalid coupon code");
    }
  };

  const handleNavigate = () => {
    navigate("/checkout");
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h2 className="mb-4">🛒 Your Cart</h2>

          {items.length === 0 ? (
            <div className="alert alert-info text-center">
              Your cart is empty. <br />
              <button className="btn btn-primary mt-2">Continue Shopping</button>
            </div>
          ) : (
            <>
              {items.map(item => (
                <div key={item.id} className="card mb-3 shadow-sm">
                  <div className="row g-0">
                    <div className="col-md-2 d-flex align-items-center justify-content-center">
                      <img
                        src={item.image}
                        className="img-fluid rounded-start"
                        alt={item.title}
                        style={{ maxWidth: '80px', height: 'auto' }}
                      />
                    </div>
                    <div className="col-md-7">
                      <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">${item.price} x {item.quantity}</p>
                        <p className="card-text">
                          <small className="text-muted">
                            Total: ${(item.price * item.quantity).toFixed(2)}
                          </small>
                        </p>
                      </div>
                    </div>
                    <div className="col-md-3 d-flex flex-column justify-content-center align-items-center">
                      <div className="btn-group mb-2" role="group">
                        <button onClick={() => DecareseQuantity(item.id)} className='btn btn-outline-secondary'>-</button>
                        <button className="btn btn-outline-dark" disabled>{item.quantity}</button>
                        <button onClick={() => IncreaseQuantity(item.id)} className='btn btn-outline-secondary'>+</button>
                      </div>
                      <button className="btn btn-outline-danger btn-sm" onClick={() => RemoveFromCart(item.id)}>Remove</button>
                    </div>
                  </div>
                </div>
              ))}

              <div className="card p-4 shadow-sm">
                <h4>Subtotal: ${subtotal.toFixed(2)}</h4>
                {discount > 0 && (
                  <h5 className="text-success">Discount Applied: {discount}%</h5>
                )}
                <h4>Total: ${discountedTotal.toFixed(2)}</h4>

                <div className="d-flex mt-3">
                  <input
                    type="text"
                    className="form-control me-2"
                    placeholder="Enter coupon code"
                    value={coupon}
                    onChange={(e) => setCoupon(e.target.value)}
                  />
                  <button className="btn btn-success" onClick={handleCouponApply}>Apply Coupon</button>
                </div>

                {discountedTotal > 100 && (
                  <div className="alert alert-success mt-3">
                    🎉 You qualify for free shipping!
                  </div>
                )}

                <div className="mt-4">
                  <button className="btn btn-primary w-100" onClick={handleNavigate}>
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;
