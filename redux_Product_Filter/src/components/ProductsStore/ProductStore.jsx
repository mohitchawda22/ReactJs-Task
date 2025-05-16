import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../ProductCard/ProductCard';
import { fetchProducts } from '../../redux/actions/products';
import Filter from '../Filter/Filter';

function ProductStore() {
  const dispatch = useDispatch();
  const { filtered } = useSelector(state => state.productReducer);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="container my-5">
      <h2 className="text-center fw-bold mb-5">🛍️ Product Showcase</h2>

      {/* Filter Section */}
      <div className="mb-4">
        <Filter />
      </div>

      {/* Product Grid */}
      <div className="row g-4">
        {filtered.length > 0 ? (
          filtered.map((product, index) => (
            <div className="col-sm-6 col-md-4 col-lg-3" key={index}>
              <ProductCard product={product} />
            </div>
          ))
        ) : (
          <div className="text-center py-5">
            <h5>No products found.</h5>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductStore;
