import { combineReducers } from "@reduxjs/toolkit";
import { productReducer } from "./productsReducer";

export const rootReducer=combineReducers({
    product:productReducer
})