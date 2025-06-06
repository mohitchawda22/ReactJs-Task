import { FormattedMessage } from "react-intl";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cartTotal } from "../utils/cartTotal";

function CartButton() {
  const navigate = useNavigate();
  const cartItems = useSelector(state => state.cart.items);
  const totalPrice = cartItems.reduce((sum, item) => sum + cartTotal(item), 0);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <button
      onClick={() => navigate("/checkout")}
      style={{
        position: "absolute",
        bottom: "0px",
        right: "0px",
        width: "100%",
        height: "10%",
        background: "#f1c40f",
        color: "#000",
        border: "none",
        padding: "12px 20px",
        fontWeight: "bold",
        fontSize: "24px",
        zIndex: 999
      }}
    >
      <h6 style={{ fontSize: "24px", margin: "0px", fontWeight: "bold" }}><FormattedMessage id="viewBasket" /></h6>
      {totalItems} ITEM / £{totalPrice.toFixed(2)}
    </button>
  );
}

export default CartButton;
