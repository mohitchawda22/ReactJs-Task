import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ProductDetail() {
  const { productId } = useParams();
  const [selectProductById, setSelectedProductById] = useState();

  const fetchProductById = async (productId) => {
    try {
      const res = await fetch(`https://fakestoreapi.com/products/${productId}`);
      const data = await res.json();
      setSelectedProductById(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProductById(productId);
  }, [productId]);

  const Star = () => {
    const stars = [];
    const fullRating = Math.floor(selectProductById.rating.rate);
    const halfRating = selectProductById.rating.rate - fullRating >= 0.5;

    for (let i = 0; i < 5; i++) {
      if (i < fullRating) {
        stars.push(<i key={i} className="bi bi-star-fill text-warning me-1"></i>);
      } else if (i === fullRating && halfRating) {
        stars.push(<i key={i} className="bi bi-star-half text-warning me-1"></i>);
      } else {
        stars.push(<i key={i} className="bi bi-star text-warning me-1"></i>);
      }
    }
    return stars;
  };

  if (!selectProductById)
    return (
      <div className="d-flex justify-content-center py-5 my-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );

  return (
    <div className="container py-5">
      <div className="row g-5 align-items-start rounded p-4 bg-light">
        <div className="col-md-6 text-center">
          <img
            src={selectProductById.image}
            alt={selectProductById.title}
            className="img-fluid"
            style={{ maxHeight: '400px', objectFit: 'contain' }}
          />
        </div>
        <div className="col-md-6">
          <h2 className="fw-semibold mb-3">{selectProductById.title}</h2>

          <div className="d-flex align-items-center mb-3">
            {Star()}
            <span className="text-muted small ms-2">{selectProductById.rating.rate}</span>
            <span className="text-black small ms-1">({selectProductById.rating.count} reviews)</span>
          </div>

          <p className="badge bg-secondary text-uppercase">{selectProductById.category}</p>

          <h3 className="text-success fw-bold mt-2 mb-3">${selectProductById.price}</h3>

          <p className="text-muted" style={{ lineHeight: '1.6' }}>
            {selectProductById.description}
          </p>

          <button className="btn btn-warning btn-lg px-4 mt-3">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
