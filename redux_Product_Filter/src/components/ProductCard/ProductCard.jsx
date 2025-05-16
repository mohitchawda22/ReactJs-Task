function ProductCard({ product }) {
  return (
    <div className="card h-100 shadow-sm border-0">
      {product.image && (
        <img
          src={product.image}
          className="card-img-top p-3 bg-light"
          alt={product.title}
          style={{ height: '200px', objectFit: 'contain' }}
        />
      )}

      <div className="card-body d-flex flex-column">
        <h6 className="card-title fw-semibold text-truncate" title={product.title}>
          {product.title}
        </h6>
        <p className="text-muted mb-1">{product.category}</p>
        <p className="fw-bold text-success mb-0">${product.price}</p>
      </div>
    </div>
  );
}

export default ProductCard;
