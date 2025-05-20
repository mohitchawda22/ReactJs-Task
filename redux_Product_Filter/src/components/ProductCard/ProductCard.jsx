import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeProvider";

function ProductCard({ product}) {
  const {theme}=useContext(ThemeContext)
  return (
    <Link className="text-decoration-none" to={`/product/${product.id}`}>
    <div className={`card h-100 shadow-sm border-0 ${theme==="dark"?"dark":"light"}`}>
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
    </Link>
  );
}

export default ProductCard;
