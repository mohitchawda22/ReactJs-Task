import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeOffcanvas } from "../redux/actions/offcanvasActions";
import "../assets/styles/productCard.scss";
import { addToCart } from "../redux/constants/cartActionTypes";

const ProductOffcanvas = () => {
  const dispatch = useDispatch();
  const { open, product } = useSelector((state) => state.offcanvas);

  const [selectedVariant, setSelectedVariant] = useState(null);
  const [selectedExtras, setSelectedExtras] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const selectedCategory=useSelector(state=>state.product.selectedCategory)

  useEffect(()=>{
    if(product && product.variants && product.variants.length > 0){
      setSelectedVariant(product.variants[0])
    }else{
      setSelectedVariant(null)
    }
    setSelectedExtras([])
    setQuantity(1)
  },[product])

  if (!open || !product) return null;

  const handleExtraToggle = (extra) => {
    setSelectedExtras((prev) =>
      prev.includes(extra)
        ? prev.filter((e) => e !== extra)
        : [...prev, extra]
    );
  };

  const getTotalPrice = () => {
    const base = selectedVariant?.price || product.price || 0;
    const extrasTotal = selectedExtras.reduce((acc, extra) => acc + extra.price, 0);
    return ((base + extrasTotal) * quantity).toFixed(2);
  };

  const handleAddToOrder = () => {
    if (product.variants && product.variants.length>0 &&!selectedVariant) return alert("Please select a size option!");
    console.log(product);
    
    const cartItem = {
      ...product,
      category:product.category || selectedCategory,
      variant: selectedVariant,
      extras: selectedExtras,
      quantity,
    };

    dispatch(addToCart(cartItem));
    dispatch(closeOffcanvas());
  };

  return (
    <div className="custom-offcanvas-backdrop" onClick={() => dispatch(closeOffcanvas())}>
      <div className="custom-offcanvas" onClick={(e) => e.stopPropagation()}>
        <div className="custom-offcanvas-header">
          <h5>{product.name}</h5>
          <button className="custom-offcanvas-close" onClick={() => dispatch(closeOffcanvas())}>
            x
          </button>
        </div>

        <div className="custom-offcanvas-body">
          {product.variants && product.variants.length >0 && (<div className="variant-section">
            <h6 className="">Size</h6>
            {product.variants?.map((variant) => (
              <div
                key={variant.name}
                className={`variant-option ${selectedVariant === variant ? "active" : ""}`}
                onClick={() => setSelectedVariant(variant)}
              >
                <span>{variant.name}</span>
                <span>£{variant.price.toFixed(2)}</span>
              </div>
            ))}
          </div>
        )}

          {product.extras && product.extras?.length > 0 && (
            <div className="extras-section">
              <h6>Select Options</h6>
              {product.extras.map((extra) => (
                <label key={extra.name} className="extra-option">
                  <input
                    type="checkbox"
                    checked={selectedExtras.includes(extra)}
                    onChange={() => handleExtraToggle(extra)}
                    className="checkbox"
                  />
                  {extra.name} (+ £{extra.price.toFixed(2)})
                </label>
              ))}
            </div>
          )}

          <div className="quantity-section">
            <button disabled={quantity <= 1} onClick={() => setQuantity(quantity - 1)}>−</button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity(quantity + 1)}>+</button>
          </div>

          <button className="add-to-order-btn" onClick={handleAddToOrder}>
            ADD TO ORDER (£{getTotalPrice()})
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductOffcanvas;
