import { SET_SEARCH_TEXT,SET_PAGE, SET_COLOR_FILTER, SET_BRAND_FILTER, SET_SORT_TYPE, SET_PRODUCTS_LOADING, SET_PRODUCTS_ERROR } from "../types"
import { SORT_TYPES } from "../../data/constants"


export const changeSearchText = (text) => async (dispatch) => {
    dispatch({ type: SET_PRODUCTS_LOADING })

    try {
        dispatch({
            type: SET_SEARCH_TEXT,
            payload: text
        })
    } catch (error) {
        console.log(error.message)
        dispatch({
            type: SET_PRODUCTS_ERROR,
            payload: error.message
        })
    }
}


export const changePageNumber = (page) => async (dispatch) => {
    dispatch({ type: SET_PRODUCTS_LOADING })

    try {
        dispatch({
            type: SET_PAGE,
            payload: page
        })
    } catch (error) {
        console.log(error.message)
        dispatch({
            type: SET_PRODUCTS_ERROR,
            payload: error.message
        })
    }
}


export const sortProducts = (type) => async (dispatch, getState) => {
    dispatch({ type: SET_PRODUCTS_LOADING })

    try {
        const { filteredProducts } = getState().productsReducer;
        let sortedArr = [];
        if(type === SORT_TYPES.LowestPrice){
            sortedArr = filteredProducts.sort((a, b) => parseFloat(a.price) - parseFloat(b.price))
        }else if(type === SORT_TYPES.HighestPrice){
            sortedArr = filteredProducts.sort((a, b) => parseFloat(b.price) - parseFloat(a.price))
        }else if(type === SORT_TYPES.NewlyAdded){
            sortedArr = filteredProducts.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
        }else if(type === SORT_TYPES.OldAdded){
            sortedArr = filteredProducts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        }
        
        dispatch({
            type: SET_SORT_TYPE,
            payload: {
                type,
                sortedArr
            }
        })
    } catch (error) {
        console.log(error.message)
        dispatch({
            type: SET_PRODUCTS_ERROR,
            payload: error.message
        })
    }
}


export const filterByColor = (color) => async (dispatch, getState) => {
    dispatch({ type: SET_PRODUCTS_LOADING })

    try {
        const {allProducts, filteredProducts, filteredColor, filteredBrand, sortType } = getState().productsReducer;
        let result = [];

        if(filteredColor.length > 0 && filteredBrand.length === 0){
            if(color.length > 0){
                result = allProducts.filter(item => item.color === color);
            }else{
                result = allProducts;
            }
        }else if(filteredColor.length > 0 && filteredBrand.length > 0){
            result = allProducts.filter(item => item.brand === filteredBrand);
            if(color.length > 0){
                result = result.filter(item => item.color === color);
            } 
        }else{
            if(color.length > 0){
                result = filteredProducts.filter(item => item.color === color);
            }else{
                result = allProducts;
            }
        }

        dispatch({
            type: SET_COLOR_FILTER,
            payload: {
                result,
                color
            }
        })

        if(sortType){
            dispatch(sortProducts(sortType))
        }
    } catch (error) {
        console.log(error.message)
        dispatch({
            type: SET_PRODUCTS_ERROR,
            payload: error.message
        })
    }
}


export const filterByBrand = (brand) => async (dispatch, getState) => {
    dispatch({ type: SET_PRODUCTS_LOADING })

    try {
        const {allProducts, filteredProducts, filteredColor, filteredBrand, sortType } = getState().productsReducer;
        let result = [];

        if(filteredBrand.length > 0 && filteredColor.length === 0){
            if(brand.length > 0){
                result = allProducts.filter(item => item.brand === brand);
            }else{
                result = allProducts;
            }
        }else if(filteredBrand.length > 0 && filteredColor.length > 0){
            result = allProducts.filter(item => item.color === filteredColor);
            if(brand.length > 0){
                result = result.filter(item => item.brand === brand);
            }
        }else{
            if(brand.length > 0){
                result = filteredProducts.filter(item => item.brand === brand);
            }else{
                result = allProducts;
            }
        }

        dispatch({
            type: SET_BRAND_FILTER,
            payload: {
                result,
                brand
            }
        })

        if(sortType){
            dispatch(sortProducts(sortType))
        }
    } catch (error) {
        console.log(error.message)
        dispatch({
            type: SET_PRODUCTS_ERROR,
            payload: error.message
        })
    }
}