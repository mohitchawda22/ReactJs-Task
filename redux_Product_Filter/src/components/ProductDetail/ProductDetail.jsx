import React, { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { fetchProductById } from '../../redux/actions/products';
import { addToCart } from '../../redux/actions/cartAction';
import { ThemeContext } from '../../context/ThemeProvider';

function ProductDetail() {
  const {theme}=useContext(ThemeContext)
  const dispatch = useDispatch()
  const { productId } = useParams()
  // console.log(id);

  const { selectedProduct, loading } = useSelector(state => state.product)

  useEffect(() => {
    dispatch(fetchProductById(productId))
  }, [dispatch, productId])

  const AddtoCart=()=>{
    dispatch(addToCart(selectedProduct))
  }
  if (loading) return (
    <div className="d-flex justify-content-center py-5 my-5">
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  )

  if (!selectedProduct) return <div>Product not found</div>;

  return (
    <div className={`container py-5 ${theme==="light"?"light":"dark"}`}>
      <div className="row g-5 align-items-start rounded p-4">
        <div className="col-md-6 text-center">
          <img
            src={selectedProduct.image}
            alt={selectedProduct.title}
            className="img-fluid"
            style={{ maxHeight: '400px', objectFit: 'contain' }}
          />
        </div>
        <div className="col-md-6">
          <h2 className="fw-semibold mb-3">{selectedProduct.title}</h2>

          <div className="d-flex align-items-center mb-3">
            {/* {Star()} */}
            <span className=" small ms-2">{selectedProduct.rating.rate}</span>
            <span className=" small ms-1">({selectedProduct.rating.count} reviews)</span>
          </div>

          <p className="badge bg-secondary text-uppercase">{selectedProduct.category}</p>

          <h3 className="text-success fw-bold mt-2 mb-3">${selectedProduct.price}</h3>

          <p className="" style={{ lineHeight: '1.6' }}>
            {selectedProduct.description}
          </p>

          <button className="btn btn-warning btn-lg px-4 mt-3" onClick={AddtoCart}>
          Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
