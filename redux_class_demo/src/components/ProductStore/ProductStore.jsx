import React, { Component } from 'react'
import { fetchProducts } from "../../redux/actions/products"
import Filter from '../Filter/Filter'
import ProductCard from '../ProductCard/ProductCard'
import { connect } from 'react-redux'

class ProductStore extends Component {
    componentDidMount() {
        this.props.fetchProducts()
    }

    render() {
        const { filtered, loading } = this.props
        console.log("Filtered products:", this.props.filtered);


        return (
            <div className='container my-4'>
                <h2 className='text-center mb-4'>🛍️ Product Showcase</h2>
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
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        filtered: state.filtered,
        loading: state.loading,
    }
}


export default connect(mapStateToProps, { fetchProducts })(ProductStore)
