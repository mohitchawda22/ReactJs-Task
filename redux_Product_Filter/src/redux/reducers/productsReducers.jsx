/* eslint-disable no-case-declarations */
import { FETCH_PRODUCTS, FETCH_PRODUCTS_BY_ID, SET_CATEGORY, SET_LOADING, SET_PRICE, SET_PRODUCTS } from "../contants/actionTypes";

export const initialState = {
  products: [],
  filtered: [],
  categories: [],
  selectedCategory: "all",
  priceRange: [0, 1000],
  loading:false,
  selectedProduct:null
};
 

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      const categories = ["all", ...new Set(action.payload.map(p => p.category))];
      return {
        ...state,
        products: action.payload,
        filtered: action.payload,
        categories,
      };

    case SET_CATEGORY:
      return {
        ...state,
        selectedCategory: action.payload,
        filtered: state.products.filter(p =>
          (action.payload === "all" || p.category === action.payload) &&
          p.price >= state.priceRange[0] &&
          p.price <= state.priceRange[1]
        ),
      };

    case SET_PRICE:
      return {
        ...state,
        priceRange: action.payload,
        filtered: state.products.filter(p =>
          (state.selectedCategory === "all" || p.category === state.selectedCategory) &&
          p.price >= action.payload[0] &&
          p.price <= action.payload[1]
        ),
      };

    case FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        filtered: action.payload,
        categories: ["all", ...new Set(action.payload.map(p => p.category))],
      };
    
    case SET_LOADING:
      return{
        ...state,
        loading:action.payload,
      }

    case FETCH_PRODUCTS_BY_ID:
      return {
        ...state,
        selectedProduct:action.payload
      }
    default:
      return state;
  }
};