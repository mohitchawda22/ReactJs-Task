import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../ProductCard/ProductCard';
import { fetchProducts } from '../../redux/actions/products';
import Filter from '../Filter/Filter';

function ProductStore() {
  const dispatch = useDispatch();
  const { filtered=[],loading } = useSelector(state => state.productReducer);


  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="container my-5">
      <h2 className="text-center fw-bold mb-5">🛍️ Product Showcase</h2>

      <div className="mb-4">
        <Filter />
      </div>

      {loading ? (
        <div className="d-flex justify-content-center py-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : filtered.length === 0 ? (
        <div className="text-center py-5">
          <h5>No products found.</h5>
        </div>
      ) : (
        <div className="row g-4">
          {filtered.map((product, index) => (
            <div className="col-sm-6 col-md-4 col-lg-3" key={index}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}


export default ProductStore;
