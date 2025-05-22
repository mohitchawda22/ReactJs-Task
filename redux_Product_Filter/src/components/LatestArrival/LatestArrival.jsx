import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from '../ProductCard/ProductCard'
import { fetchProducts } from '../../redux/actions/products'

function LatestArrival() {
    const dispatch=useDispatch()
    const {filtered}=useSelector(state=>state.product)
    const latestProducts=filtered.slice(0,4)
    console.log(latestProducts);

    useEffect(() => {
        dispatch(fetchProducts());
      }, [dispatch]);
    
  return (
    <div className=" text-white py-5">
      <div className="container">
        <p className="text-center text-muted mb-2">Read Today's News.</p>
        <h2 className="text-center display-6 mb-5">Latest Arrivals</h2>

        <div className="row">
          {latestProducts.map((product) => (
            <div key={product.id} className="col-md-3 mb-4">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default LatestArrival
