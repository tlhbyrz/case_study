import { ADD_ITEM_TO_BASKET, DELETE_ITEM_FROM_BASKET,SET_BASKET_LOADING, SET_BASKET_ERROR } from "../types"


export const addItemTobasket = (item) => async (dispatch, getState) => {
    dispatch({ type: SET_BASKET_LOADING })

    try {
        const basket = getState().basketReducer.basket;
        const newBasket = [...basket, item]

        dispatch({
            type: ADD_ITEM_TO_BASKET,
            payload: newBasket
        })
        localStorage.setItem("productList", JSON.stringify(newBasket));
    } catch (error) {
        console.log(error.message)
        dispatch({
            type: SET_BASKET_ERROR,
            payload: error.message
        })
    }
}


export const deleteItemFrombasket = (id) => async (dispatch, getState) => {
    dispatch({ type: SET_BASKET_LOADING })

    try {
        const basket = getState().basketReducer.basket;
        const filtered = basket.filter(item => item.id !== id)

        dispatch({
            type: DELETE_ITEM_FROM_BASKET,
            payload: filtered
        })
        localStorage.setItem("productList", JSON.stringify(filtered));
    } catch (error) {
        console.log(error.message)
        dispatch({
            type: SET_BASKET_ERROR,
            payload: error.message
        })
    }
}