import { combineReducers } from "@reduxjs/toolkit";
import { productReducer } from "./productsReducer";
import { cartReducer } from "./cartReducer";

export const rootReducer=combineReducers({
    product:productReducer,
    cart:cartReducer
})