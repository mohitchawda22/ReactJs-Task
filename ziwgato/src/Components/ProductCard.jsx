import React from "react";
import { useDispatch } from "react-redux";
import { openOffcanvas } from "../redux/actions/offcanvasActions";
import "../assets/styles/productCard.scss";

function ProductCard({ product }) {
    const dispatch = useDispatch();

    return (
        <div className='productCard'>
            <div
                className='cardBox'
                onClick={() => dispatch(openOffcanvas(product))}
                role="button"
            >
                <div className='productLeft'>
                    <p className='productName'>{product.name}</p>
                    <p className='productDesc'>{product.description}</p>
                </div>
                <div className='productRight'>
                    <p className='productPrice'>£{product.price.toFixed(2)}</p>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
