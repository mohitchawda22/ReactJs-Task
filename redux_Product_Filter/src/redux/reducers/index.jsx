import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer";
import { productReducer } from "./productsReducers";

export const rootReducer=combineReducers({
    cart:cartReducer,
    product:productReducer
})