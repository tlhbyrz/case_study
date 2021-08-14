import { SET_SEARCH_TEXT, SET_PRODUCTS_LOADING, SET_PRODUCTS_ERROR } from "../types"


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