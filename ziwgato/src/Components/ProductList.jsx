import { useSelector } from "react-redux";
import products from "../data/products.json";
import ProductCard from "./ProductCard";
import Categories from "../data/categories.json";
import "../assets/styles/ProductList.scss"

const ProductList = () => {
  const selectedCategoryName = useSelector(state => state.product.selectedCategory);
  const selectedCategory = Categories.categories.find(c => c.name === selectedCategoryName);

  if (!selectedCategory) return <p>Please select a category to view products.</p>;

  const filteredProducts = products.products.filter(
    p => p.parentId === selectedCategory.id
  );

  if (filteredProducts.length === 0) return <p>No products in this category.</p>;

  return (
    <div className="App">
      {filteredProducts.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
