import { ADD_TO_CART, CLEAR_CART } from "../actions/cartAction";

export const addToCart=(item)=>(
    {type:ADD_TO_CART,payload:item}
)

export const clearCart=()=>(
    {type:CLEAR_CART}
)