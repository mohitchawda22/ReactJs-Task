import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../../redux/actions/products';
import { addToCart } from '../../redux/actions/cartAction';
import { ThemeContext } from '../../context/ThemeProvider';

function ProductDetail() {
  const { theme } = useContext(ThemeContext);
  const dispatch = useDispatch();
  const { productId } = useParams();

  const { selectedProduct, loading } = useSelector(state => state.product);

  useEffect(() => {
    dispatch(fetchProductById(productId));
  }, [dispatch, productId]);

  const handleAddToCart = () => {
    dispatch(addToCart(selectedProduct));
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center py-5 my-5">
        <div className="spinner-border text-primary" role="status" />
      </div>
    );
  }

  if (!selectedProduct) {
    return (
      <div className={`container py-5 text-center ${theme === 'dark' ? 'text-light' : 'text-dark'}`}>
        <h3>Product not found</h3>
      </div>
    );
  }

 const Star = () => {
        const stars = []
        const fullRating = Math.floor(selectedProduct?.rating?.rate)
        const halfRating = selectedProduct?.rating?.rate - fullRating >= 0.5

        for (let i = 0; i < 5; i++) {
            if (i < fullRating) {
                stars.push(<i className="bi bi-star-fill text-warning me-1"></i>)
            } else if (i == fullRating && halfRating) {
                stars.push(<i className="bi bi-star-half text-warning me-1"></i>)
            } else {
                stars.push(<i className="bi bi-star text-warning me-1"></i>)
            }
        }
        return stars
    }

  return (
    <div className={`container py-5 ${theme === 'dark' ? 'dark' : 'light'} rounded`}>
      <div className="row g-5 align-items-center">
        <div className="col-md-6 text-center">
          <img
            src={selectedProduct.image}
            alt={selectedProduct.title}
            className="img-fluid rounded"
            style={{ maxHeight: '400px', objectFit: 'contain' }}
          />
        </div>
        <div className="col-md-6">
          <h2 className="fw-semibold mb-3">{selectedProduct.title}</h2>

          {Star()}

          <p className="badge bg-secondary text-uppercase my-3">{selectedProduct.category}</p>

          <h3 className="text-success fw-bold my-3">${selectedProduct.price.toFixed(2)}</h3>

          <p>{selectedProduct.description}</p>

          <button
            className="btn btn-danger btn-lg px-4 mt-4"
            onClick={handleAddToCart}
            aria-label={`Add ${selectedProduct.title} to cart`}
          >
            <i className="bi bi-cart-plus me-2"></i> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
