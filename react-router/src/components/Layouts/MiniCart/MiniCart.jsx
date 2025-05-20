import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

export default function MiniCart() {
  const [isOpen, setIsOpen] = useState(false)
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Vintage Chair",
      color: "Brown",
      price: 149.0,
      quantity: 1,
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 2,
      name: "Coffee Table",
      color: "Walnut",
      price: 199.0,
      quantity: 1,
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 3,
      name: "Floor Lamp",
      color: "Black",
      price: 89.0,
      quantity: 1,
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 4,
      name: "Throw Pillows (Set of 2)",
      color: "Beige",
      price: 39.0,
      quantity: 2,
      image: "/placeholder.svg?height=60&width=60",
    },
  ])

  const toggleCart = () => {
    setIsOpen(!isOpen)
  }

  const closeCart = () => {
    setIsOpen(false)
  }

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return
    setCartItems(cartItems.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
  }

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0)
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)

  // Close cart when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const target = event.target.value
      if (isOpen && !target.closest(".mini-cart") && !target.closest(".cart-trigger")) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen])

  // Prevent scrolling when cart is open on mobile
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  return (
    <>
      {/* Cart Trigger Button */}
      <button
        className="btn btn-link nav-link position-relative cart-trigger"
        onClick={toggleCart}
        aria-label="Shopping Cart"
      >
        <i className="bi bi-cart"></i>
        {totalItems > 0 && (
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning text-white">
            {totalItems}
            <span className="visually-hidden">items in cart</span>
          </span>
        )}
      </button>

      {/* Mini Cart Overlay */}
      {isOpen && (
        <div className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50" style={{ zIndex: 1040 }}></div>
      )}

      {/* Mini Cart */}
      <div
        className={`mini-cart position-fixed top-0 end-0 h-100 bg-white shadow-lg overflow-hidden transition-all ${isOpen ? "show" : ""}`}
        style={{
          width: "350px",
          maxWidth: "100%",
          zIndex: 1050,
          transform: isOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.3s ease-in-out",
        }}
      >
        <div className="d-flex flex-column h-100">
          {/* Cart Header */}
          <div className="p-3 border-bottom d-flex justify-content-between align-items-center">
            <h5 className="mb-0">Your Cart ({totalItems})</h5>
            <button className="btn btn-sm btn-link text-dark" onClick={closeCart}>
              <i className="bi bi-x-lg"></i>
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-grow-1 overflow-auto p-3">
            {cartItems.length === 0 ? (
              <div className="text-center py-5">
                <i className="bi bi-cart-x" style={{ fontSize: "3rem", color: "#ddd" }}></i>
                <p className="mt-3 mb-4">Your cart is empty</p>
                <Link href="/product" className="btn btn-warning text-white" onClick={closeCart}>
                  Start Shopping
                </Link>
              </div>
            ) : (
              <div className="list-group list-group-flush">
                {cartItems.map((item) => (
                  <div key={item.id} className="list-group-item px-0 py-3 border-bottom">
                    <div className="d-flex">
                      <img
                        src={item.image || "/placeholder.svg"}
                        width={60}
                        height={60}
                        alt={item.name}
                        className="rounded me-3 object-fit-cover"
                      />
                      <div className="flex-grow-1 min-width-0">
                        <div className="d-flex justify-content-between align-items-start">
                          <h6 className="mb-0 text-truncate" style={{ maxWidth: "180px" }}>
                            {item.name}
                          </h6>
                          <button
                            className="btn btn-sm btn-link text-danger p-0 ms-2"
                            onClick={() => removeItem(item.id)}
                          >
                            <i className="bi bi-x"></i>
                          </button>
                        </div>
                        <p className="text-muted small mb-2">Color: {item.color}</p>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="input-group input-group-sm" style={{ width: "100px" }}>
                            <button
                              className="btn btn-outline-secondary"
                              type="button"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            >
                              <i className="bi bi-dash"></i>
                            </button>
                            <input type="text" className="form-control text-center" value={item.quantity} readOnly />
                            <button
                              className="btn btn-outline-secondary"
                              type="button"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              <i className="bi bi-plus"></i>
                            </button>
                          </div>
                          <span className="fw-bold">${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Cart Footer */}
          {cartItems.length > 0 && (
            <div className="p-3 border-top mt-auto">
              <div className="d-flex justify-content-between mb-3">
                <span>Subtotal:</span>
                <span className="fw-bold">${subtotal.toFixed(2)}</span>
              </div>
              <p className="text-muted small mb-3">Shipping, taxes, and discounts calculated at checkout</p>
              <div className="d-grid gap-2">
                <Link href="/cart" className="btn btn-warning text-white" onClick={closeCart}>
                  View Cart
                </Link>
                <Link href="/checkout" className="btn btn-outline-secondary" onClick={closeCart}>
                  Checkout
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
