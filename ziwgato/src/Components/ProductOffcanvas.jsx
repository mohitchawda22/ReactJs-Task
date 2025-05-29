import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeOffcanvas } from "../redux/actions/offcanvasActions";
import "../assets/styles/productCard.scss";

function ProductOffcanvas() {
    const dispatch = useDispatch();
    const { open, product } = useSelector(state => state.offcanvas);

    if (!open || !product) return null;

    return (
        <div className="custom-offcanvas-backdrop" onClick={() => dispatch(closeOffcanvas())}>
            <div
                className="custom-offcanvas"
                onClick={e => e.stopPropagation()}
            >
                <div className="custom-offcanvas-header">
                    <h5>{product.name}</h5>
                    <button
                        type="button"
                        className="custom-offcanvas-close"
                        onClick={() => dispatch(closeOffcanvas())}
                        aria-label="Close"
                    >×</button>
                </div>
                <div className="custom-offcanvas-body">
                    <p>{product.description}</p>
                    <p><strong>Price: </strong>£{product.price.toFixed(2)}</p>
                    {product.category && (
                        <p><strong>Category: </strong>{product.category}</p>
                    )}
                    {product.rating && (
                        <p><strong>Rating: </strong>{product.rating}</p>
                    )}
                    {product.image && (
                        <img
                            src={product.image}
                            alt={product.name}
                            style={{ width: "100%", borderRadius: "12px", marginTop: "12px" }}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProductOffcanvas;