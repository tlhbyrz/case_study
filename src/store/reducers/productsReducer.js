import { SET_SEARCH_TEXT, SET_PRODUCTS_LOADING, SET_PRODUCTS_ERROR } from "../types"
import { products } from "../../data/products"

const initialState = {
    allProducts: products,
    filteredProducts: products,
    searchText: "",
    loading: false,
    error: null
}

export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SEARCH_TEXT:
            return {
                ...state,
                searchText: action.payload,
                filteredProducts: state.allProducts.filter(item => item.title.toLowerCase().includes(action.payload.toLowerCase())),
                loading: false
            }   
        case SET_PRODUCTS_LOADING:
            return {
                ...state,
                error: null,
                loading: true
            }
        case SET_PRODUCTS_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            } 
        default:
            return state
    }
}