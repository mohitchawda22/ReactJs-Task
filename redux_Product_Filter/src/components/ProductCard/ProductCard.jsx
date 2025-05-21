
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, decreaseQuantity, increaseQuantity } from "../../redux/actions/cartAction";


function ProductCard({ product }) {
  const dispatch = useDispatch()
  const cartItems = useSelector(state => state.cart.items)
  const cartItem = cartItems.find(item => item.id === product.id)

  const AddToCart = (e) => {
    e.preventDefault()
    dispatch(addToCart(product))
  }

  const DecrementQuantity=(e,id)=>{
    e.preventDefault()
    dispatch(decreaseQuantity(id))
  }

  const IncrementQuantity=(e,id)=>{
    e.preventDefault()
    dispatch(increaseQuantity(id))
  }

  return (
    <Link className="text-decoration-none" to={`/product/${product.id}`}>
      <div className={`card h-100 shadow-sm border-0`}>
        {product.image && (
          <img
            src={product.image}
            className="card-img-top p-3 bg-light"
            alt={product.title}
            style={{ height: '200px', objectFit: 'contain' }}
          />
        )}

        <div className="card-body d-flex flex-column">
          <h6 className="card-title fw-semibold text-truncate" title={product.title}>
            {product.title}
          </h6>
          <p className="text-muted mb-1">{product.category}</p>
          <p className="fw-bold text-success mb-0">${product.price}</p>
          {cartItem ? (
            <div className="d-flex justify-content-between align-items-center mt-auto w-50">
              <button className="btn btn-sm btn-warning" onClick={(e)=>DecrementQuantity(e,product.id)}>-</button>
              <span>{cartItem.quantity}</span>
              <button className="btn btn-sm btn-warning" onClick={(e)=>IncrementQuantity(e,product.id)}>+</button>
            </div>
          ) : (
            <button onClick={AddToCart} className="btn btn-warning">Add to Cart</button>
          )}
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
