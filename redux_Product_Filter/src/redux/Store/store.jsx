/* eslint-disable no-case-declarations */
import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "../reducers/productsReducers";

export const initialState = {
  products: [],
  filtered: [],
  categories: [],
  selectedCategory: "all",
  priceRange: [0, 1000],
};
 
export const store=configureStore({
    reducer:{
        productReducer
    }
}) 

   
