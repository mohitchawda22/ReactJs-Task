/* eslint-disable no-case-declarations */
import { ADD_TO_CART, CLEAR_CART, DECREASE_QUANTITY, INCREASE_QUANTITY } from "../actions/cartAction";
import { sortExtra } from "../constants/cartActionTypes"

export const initialState = {
    items: []
}

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const ExsistingItem = state.items.findIndex(item => item.id === action.payload.id &&
                JSON.stringify(item.variant) === JSON.stringify(action.payload.variant) &&
                sortExtra(item.extras) === sortExtra(action.payload.extras))

            if (ExsistingItem !== -1) {
                const updatedItem = state.items.map((item, idx) => idx === ExsistingItem ? { ...item, quantity: item.quantity + action.payload.quantity } : item)
                return {
                    ...state,
                    items: updatedItem
                }
            }
            return {
                ...state,
                items: [...state.items, { ...action.payload }]
            }
        case CLEAR_CART:
            return {
                items: []
            }
        case INCREASE_QUANTITY:
            return {
                ...state,
                items: state.items.map((item, i) => i === action.payload ? { ...item, quantity: item.quantity + 1 } : item)
            }
        case DECREASE_QUANTITY:
            return {
                ...state,
                items: state.items.map((item, i) => i === action.payload && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item)
            }
        default:
            return state
    }
}