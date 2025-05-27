import { ADD_TO_CART } from "../actions/cartAction";

export const addToCart=(item)=>(
    {type:ADD_TO_CART,payload:item}
)