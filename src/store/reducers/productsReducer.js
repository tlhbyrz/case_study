import { SET_SEARCH_TEXT,
    SET_COLOR_FILTER,
    SET_BRAND_FILTER,
    SET_SORT_TYPE,
    SET_PAGE,
    SET_TOTAL_PAGE,
    SET_PRODUCTS_LOADING,
    SET_PRODUCTS_ERROR } from "../types"
import { products } from "../../data/products"
import { MAX_PAGE_ITEMS } from "../../data/constants"

const initialState = {
    allProducts: products,
    filteredProducts: products,
    searchText: "",
    filteredColor: "",
    filteredBrand: "",
    sortType: "",
    currentPage: 1,
    totalPage: Math.ceil(products.length / MAX_PAGE_ITEMS),
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
        case SET_PAGE:
            return {
                ...state,
                currentPage: action.payload,
                loading: false
            } 
        case SET_TOTAL_PAGE:
            return {
                ...state,
                totalPage: action.payload,
                loading: false
            } 
        case SET_COLOR_FILTER:
            return {
                ...state,
                filteredColor: action.payload.color,
                filteredProducts: action.payload.result,
                loading: false
            }  
        case SET_BRAND_FILTER:
            return {
                ...state,
                filteredBrand: action.payload.brand,
                filteredProducts: action.payload.result,
                loading: false
            } 
        case SET_SORT_TYPE:
            return {
                ...state,
                sortType: action.payload.type,
                filteredProducts: action.payload.sortedArr,
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