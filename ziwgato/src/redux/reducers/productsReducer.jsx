/* eslint-disable no-case-declarations */
import { SET_CATEGORY, SET_PRODUCTS } from "../actions/productsAction";

export const initialStates={
    products:[],
    categories:[],
    filtered:[],
    selectedCategory:"all",
}

export const productReducer=(state=initialStates,action)=>{
    switch (action.type) {
        case SET_PRODUCTS:
            const categories=["all",...new Set(action.payload.map(p=>p.categories))]
            return{
                ...state,
                products:action.payload,
                categories,
                filtered:action.payload
            }
            
        case SET_CATEGORY:
            return{
                ...state,
                selectedCategory:action.payload,
                filtered:state.products.filter(p=>(
                    action.payload==="all"|| p.categories===action.payload
                ))
            }
        default:
            return state
    }
}
