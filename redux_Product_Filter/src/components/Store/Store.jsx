/* eslint-disable no-case-declarations */
import { composeWithDevTools } from "@redux-devtools/extension"
import {applyMiddleware, createStore} from "redux"
import { thunk } from "redux-thunk"


const initialState = {
    products: [],
    filtered: [],
    categories: [],
    selectedCategory: "all",
    priceRange: [0, 1000],
}

const SET_PRODUCTS = "set_products"
const SET_CATEGORY="set_category"
const SET_PRICE="set_price"

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case SET_PRODUCTS:
            const categories = ["all", ...new Set(action.payload.map(p => p.category))]
            return {
                ...state,
                products:action.payload, 
                filtered: action.payload, 
                categories,
            }

        case SET_CATEGORY:
            return{
                ...state,
                selectedCategory:action.payload,
                filtered:state.products.filter(p=>(action.payload==="all" || p.categories===action.payload) && p.price>=state.priceRange[0] && p.price<=state.priceRange[1])
            }

        case SET_PRICE:
            return{
                ...state,
                priceRange:action.payload,
                filtered:state.products.filter(p=>(state.selectedCategory==="all" || p.category=== state.selectedCategory) && p.price>= action.payload[0] && p.price<=action.payload[1])
            }

        default:
           return state 
    }
}

export const store=createStore(productReducer,composeWithDevTools(applyMiddleware(thunk)))

export const setProducts=(data)=>{
    return ({type:SET_CATEGORY,payload:data})
}
export const setCategory=(category)=>{
    return ({type:SET_CATEGORY,payload:category})
}

export const setPrice=(range)=>{
    return ({type:SET_PRICE,paylaod:range})
}

export const fetchProducts=()=>{
    return async()=>{
        try {
            const res=await fetch("https://fakestoreapi.com/products")
            const data=await res.json()
            console.log(data);
        } catch (error) {
            console.log(error,"Error");
            
        }
    }
}