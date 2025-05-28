import React from 'react';

function ProductModal({ show, handleClose, product }) {
    if (!show) return null;

    return (
        <div className="modalOverlay" onClick={handleClose}>
            <div className="bottomModal" onClick={(e) => e.stopPropagation()}>
                <div className="modalHeader">
                    <h5>{product.name}</h5>
                    <button className="closeBtn" onClick={handleClose}>×</button>
                </div>
                <div className="modalBody">
                    <p>{product.description}</p>
                    <p className="price">Price: £{product.price.toFixed(2)}</p>
                </div>
            </div>
        </div>
    );
}

export default ProductModal;
