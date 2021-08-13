import { ADD_ITEM_TO_BASKET, DELETE_ITEM_FROM_BASKET,SET_BASKET_LOADING, SET_BASKET_ERROR } from "../types"

const initialState = {
    basket: [],
    error: null,
    loading: false,
}

export const basketReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM_TO_BASKET:
            return {
                ...state,
                basket: action.payload,
                loading: false
            }
        case DELETE_ITEM_FROM_BASKET:
            return {
                ...state,
                basket: action.payload,
                loading: false
            }
        case SET_BASKET_LOADING:
            return {
                ...state,
                error: null,
                loading: true
            }
        case SET_BASKET_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            }    
        default:
            return state
    }
}