import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { fetchProductById } from '../../redux/actions/products';

function ProductDetail() {

  const dispatch = useDispatch()
  const { productId } = useParams()
  // console.log(id);

  const { selectedProduct, loading } = useSelector(state => state.productReducer)

  useEffect(() => {
    dispatch(fetchProductById(productId))
  }, [dispatch, productId])

  if (loading) return (
     <div className="d-flex justify-content-center py-5 my-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
  )
  if (!selectedProduct) return <div>Product not found</div>;
  return (
    <div className="container mt-4">
      <h2>{selectedProduct.title}</h2>
      <img
        src={selectedProduct.image}
        alt={selectedProduct.title}
        style={{ height: '300px', objectFit: 'contain' }}
      />
      <p className="text-muted">{selectedProduct.category}</p>
      <h4 className="text-success">${selectedProduct.price}</h4>
      <p>{selectedProduct.description}</p>
    </div>
  )
}

export default ProductDetail
