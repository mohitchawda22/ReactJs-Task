import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./reducers/productsReducers";


export const store=configureStore({
    reducer:{
        productReducer
    }
}) 

   
