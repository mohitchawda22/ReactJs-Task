import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ProductCard extends Component {
    render() {
        const { product } = this.props
        return (
            <Link to={`/product/${product.id}`} className='text-decoration-none'>
                <div className='card h-100 shadow-sm'>
                    {product.image && (
                        <img
                            src={product.image}
                            className='card-img-top p-3'
                            alt={product.title}
                            style={{ height: "200px", objectFit: "contain" }}
                        />
                    )}
                    <div className='card-body d-flex flex-column'>
                        <h6 className="card-title fw-bold">{product.title}</h6>
                        <p className="text-muted">{product.category}</p>
                        <p className="card-text fw-semibold text-success">${product.price}</p>
                    </div>
                </div>
            </Link>
        )
    }
}
