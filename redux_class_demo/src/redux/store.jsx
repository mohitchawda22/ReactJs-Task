import { applyMiddleware,createStore } from "@reduxjs/toolkit";
import { ProductReducer } from "./reducers/productsReducers";
import { composeWithDevTools } from "@redux-devtools/extension";
import { thunk } from "redux-thunk";

export const store=createStore(ProductReducer,composeWithDevTools(applyMiddleware(thunk)))