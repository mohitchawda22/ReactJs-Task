import { useDispatch, useSelector } from 'react-redux'
import { decreaseQuantity, increaseQuantity, removeFromCart } from '../../redux/actions/cartAction'

function Cart() {

    const items = useSelector(state => state.cart.items)
    const dispatch = useDispatch()

    const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

    const IncreaseQuantity=(id)=>{
        dispatch(increaseQuantity(id))
    }

    const DecareseQuantity=(id)=>{
        dispatch(decreaseQuantity(id))
    }

    const RemoveFromCart=(id)=>{
        dispatch(removeFromCart(id))
    }
    return (
        <div className="container my-5">
            <h2 className="mb-4">Your Cart</h2>
            {items.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    {items.map(item => (
                        <div key={item.id} className="d-flex justify-content-between mb-3">
                            <div>
                                <img src={item.image} alt="" width={100} height={100} />
                                <h5>{item.title}</h5>
                                <p>${item.price} x {item.quantity}</p>
                            </div>
                            <div className="d-flex align-items-center">
                                <button onClick={() => DecareseQuantity(item.id)} className='btn btn-warning'>-</button>
                                <span className="mx-2">{item.quantity}</span>
                                <button onClick={() => IncreaseQuantity(item.id)} className='btn btn-warning'>+</button>
                                <button className="btn btn-danger btn-sm ms-3" onClick={() => RemoveFromCart(item.id)}>Remove</button>
                            </div>
                        </div>
                    ))}
                    <hr />
                    <h4>Subtotal: ${subtotal.toFixed(2)}</h4>
                </>
            )}
        </div>
    )
}

export default Cart
