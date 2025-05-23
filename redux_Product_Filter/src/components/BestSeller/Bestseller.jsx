import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../redux/actions/products'
import ProductCard from '../ProductCard/ProductCard'

function Bestseller() {
    const dispatch=useDispatch()
    const {filtered}=useSelector(state=>state.product)
    const bestsellerProducts=filtered.slice(6,10)

    useEffect(()=>{
        dispatch(fetchProducts())
    },[dispatch])
  return (
    <div className="xt-dark py-5" id='bestseller'>
      <div className="container">
        <h2 className="text-center display-6 mb-5">Browse our Bestsellers</h2>
        <div className="row">
          {bestsellerProducts.map((product) => (
            <div key={product.id} className="col-md-3 mb-4">
              <ProductCard product={product} darkMode={true} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Bestseller
