import { ADD_TO_CART } from "../actions/cartAction";

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
    
        default:
            return state
    }
}