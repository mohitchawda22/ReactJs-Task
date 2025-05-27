import { SET_CATEGORY, SET_PRODUCTS } from "../actions/productsAction"

export const setProducts = (data) => (
    { type: SET_PRODUCTS, payload: data }
)
export const setCategory = (categories) => (
    { type: SET_CATEGORY, payload: categories }
) 