import { SET_CATEGORY } from "../actions/productsAction"

export const setCategory = (categories) => (
    { type: SET_CATEGORY, payload: categories }
) 