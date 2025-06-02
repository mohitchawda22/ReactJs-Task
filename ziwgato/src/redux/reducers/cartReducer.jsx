import { ADD_TO_CART, CLEAR_CART } from "../actions/cartAction";

export const initialState={
    items:[]
}

export const cartReducer=(state=initialState,action)=>{
    switch (action.type) {
        case ADD_TO_CART:
            return{
                ...state,
                items:[...state.items,action.payload]
            }
        case CLEAR_CART:
            return{
                items:[]
            }
        default:
            return state
    }
}