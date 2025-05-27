import { useSelector } from "react-redux";

const ProductList = ({ onProductClick }) => {
  const products = useSelector(state => state.products.filtered);

  return (
    <div>
      {products.map(prod => (
        <div key={prod.id} onClick={() => onProductClick(prod)}>
          <h3>{prod.name}</h3>
          <p>{prod.description}</p>
          <b>£{prod.price}</b>
        </div>
      ))}
    </div>
  );
};

export default ProductList;