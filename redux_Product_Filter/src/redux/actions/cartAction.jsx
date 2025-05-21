import { ADD_TO_CART, CLEAR_CART, DECREMENT_QUANTITY, INCREMENT_QUANTITY, REMOVE_FROM_CART } from "../contants/cartActionTypes"

export const addToCart=(product)=>({
    type:ADD_TO_CART,
    payload:product
})

export const removeFromCart=(id)=>({
    type:REMOVE_FROM_CART,
    payload:id
})

export const clearCart=()=>({
    type:CLEAR_CART
})

export const increaseQuantity=(id)=>({
    type:INCREMENT_QUANTITY,payload:id
})

export const decreaseQuantity=(id)=>({
    type:DECREMENT_QUANTITY,payload:id
})