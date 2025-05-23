import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, decreaseQuantity, increaseQuantity } from "../../redux/actions/cartAction";
import { useState } from "react";
import "./ProductCard.css"; // Create this for extra styling
import { toast } from "react-toastify";

function ProductCard({ product }) {
  const dispatch = useDispatch();
  const [isHovered, setIsHovered] = useState(false);

  const cartItems = useSelector(state => state.cart.items);
  const cartItem = cartItems.find(item => item.id === product.id);

  const AddToCart = (e) => {
    e.preventDefault();
    toast.success("Item added in cart")
    dispatch(addToCart(product));
  };

  const DecrementQuantity = (e, id) => {
    e.preventDefault();
    toast.info("Item removed!")
    dispatch(decreaseQuantity(id));
  };

  const IncrementQuantity = (e, id) => {
    e.preventDefault();
    dispatch(increaseQuantity(id));
  };

  return (
    <Link className="text-decoration-none" to={`/product/${product.id}`}>
      <div
        className={`card product-card border-0 shadow-sm h-100 position-relative`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >

        <div className="position-relative overflow-hidden" style={{ height: "280px" }}>
          {product.image && (
            <img
              src={product.image}
              className="w-100 h-100 object-fit-cover transition-scale"
              alt={product.title}
              style={{
                transform: isHovered ? "scale(1.05)" : "scale(1)",
              }}
            />
          )}

          <div
            className={`position-absolute start-0 bottom-0 w-100 p-3 cart-overlay ${
              isHovered ? "show" : ""
            }`}
          >
            {cartItem ? (
              <div className="d-flex justify-content-between align-items-center w-50 m-auto">
                <button
                  className="btn btn-sm btn-danger"
                  onClick={(e) => DecrementQuantity(e, product.id)}
                >
                  <i className="bi bi-dash"></i>
                </button>
                <span className="text-white">{cartItem.quantity}</span>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={(e) => IncrementQuantity(e, product.id)}
                >
                  <i className="bi bi-plus"></i>
                </button>
              </div>
            ) : (
              <button
                onClick={AddToCart}
                className="btn btn-sm btn-danger w-100 text-white"
              >
                <i className="bi bi-cart-plus me-1"></i> Add to Cart
              </button>
            )}
          </div>
        </div>

        <div className="card-body bg-dark text-light p-3">
          <p className=" mb-1 small text-truncate">{product.category}</p>
          <h6 className="card-title fw-semibold text-truncate" title={product.title}>
            {product.title}
          </h6>
          <div className="d-flex align-items-center">
            <h6 className="fw-bold text-success mb-0">${product.price}</h6>
            {product.oldPrice && (
              <del className="text-muted ms-2">${product.oldPrice}</del>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
