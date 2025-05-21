/* eslint-disable no-case-declarations */
import { ADD_TO_CART, CLEAR_CART, DECREMENT_QUANTITY, INCREMENT_QUANTITY, REMOVE_FROM_CART } from "../contants/cartActionTypes";

export const initialState={
    items:[],
    total:0,
}

export const cartReducer=(state=initialState,action)=>{
    switch (action.type) {
        case ADD_TO_CART:
            const exsistingItem=state.items.find(item=>item.id===action.payload.id)
            let updatedItems

            if (exsistingItem) {
                updatedItems=state.items.map(item=>item.id===action.payload.id ? {...item,quantity :item.quantity+1}:item)
            }else{
                updatedItems=[...state.items,{...action.payload,quantity:1}]
            }
            
            return{
                ...state,
                items:updatedItems,
                total:updatedItems.reduce((sum,item)=>sum+item.price * item.quantity,0)
            }

        case REMOVE_FROM_CART:
            const filteredItems=state.items.filter(item=>item.id !== action.payload)
            return{
                ...state,
                items:filteredItems,
                total:filteredItems.reduce((sum,item)=>sum+item.price*item.quantity,0)
            }

        case CLEAR_CART:
            return {
                items:[],
                total:0
            }

        case INCREMENT_QUANTITY:
            return {
                ...state,
                items:state.items.map(item=>item.id===action.payload ? {...item,quantity:item.quantity+1}:item)
            }

        case DECREMENT_QUANTITY:
            return{
                ...state,
                items:state.items.map(item=>item.id===action.payload ?{...item,quantity:item.quantity-1}:item).filter(item=>item.quantity>0)
            }
        default:
            return state
    }
}