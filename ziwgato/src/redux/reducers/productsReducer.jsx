import { SET_CATEGORY } from "../actions/productsAction";

export const initialState={
    selectedCategory:"Drinks"
}

export const productReducer=(state=initialState,action)=>{
    switch (action.type) {
        case SET_CATEGORY:
            return{
                ...state,
                selectedCategory:action.payload
            }
            
        default:
            return state
    }
}