import { ADD_TO_CART, CLEAR_CART, DECREASE_QUANTITY, INCREASE_QUANTITY } from "../actions/cartAction";

export const addToCart=(item)=>(
    {type:ADD_TO_CART,payload:item}
)

export const clearCart=()=>(
    {type:CLEAR_CART}
)

export const increaseItem=({ id, variant, extras })=>(
    {type:INCREASE_QUANTITY,payload:{ id, variant, extras }}
)

export const decreaseItem=({ id, variant, extras })=>(
    {type:DECREASE_QUANTITY,payload:{ id, variant, extras }}
)