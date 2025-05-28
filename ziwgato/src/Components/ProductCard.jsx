import "../assets/styles/productCard.scss";

function ProductCard({ product }) {
    const offcanvasId = `offcanvas-${product.id}`;

    return (
        <>
            <div className='productCard'>
                <div
                    className='cardBox'
                    data-bs-toggle="offcanvas"
                    data-bs-target={`#${offcanvasId}`}
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

            <div className='offcanvas-wrapper'>
                <div
                    className="offcanvas offcanvas-bottom custom-offcanvas"
                    tabIndex="-1"
                    id={offcanvasId}
                    aria-labelledby={`${offcanvasId}-label`}
                    data-bs-backdrop="false"
                >
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id={`${offcanvasId}-label`}>{product.name}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body small">
                        <p>{product.description}</p>
                        <p><strong>Price: </strong>£{product.price.toFixed(2)}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductCard;
