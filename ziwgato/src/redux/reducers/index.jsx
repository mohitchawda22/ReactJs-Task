import { combineReducers } from "@reduxjs/toolkit";
import { productReducer } from "./productsReducer";
import { cartReducer } from "./cartReducer";
import offcanvasReducer from "./offcanvasReducer";

export const rootReducer=combineReducers({
    product:productReducer,
    cart:cartReducer,
    offcanvas: offcanvasReducer,
})