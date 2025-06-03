import { ADD_TO_CART, CLEAR_CART, DECREASE_QUANTITY, INCREASE_QUANTITY } from "../actions/cartAction";

export const initialState={
    items:[]
}

export const cartReducer=(state=initialState,action)=>{
    switch (action.type) {
        case ADD_TO_CART:
            return{
                ...state,
                items:[...state.items,{...action.payload}]
            }
        case CLEAR_CART:
            return{
                items:[]
            }
        case INCREASE_QUANTITY:
            return {
                ...state,
                items:state.items.map((item,i)=>i===action.payload ? {...item,quantity:item.quantity+1}:item)
            }
        case DECREASE_QUANTITY:
            return{
                ...state,
                items:state.items.map((item,i)=>i===action.payload && item.quantity>1 ?{...item,quantity:item.quantity-1}:item)
            }    
        default:
            return state
    }
}