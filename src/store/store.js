import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { basketReducer } from "./reducers/basketReducer";
import { productsReducer } from "./reducers/productsReducer";

const reducer = combineReducers({
    basketReducer,
    productsReducer
})

const basketInfosFromStorage = localStorage.getItem('productList')
    ? JSON.parse(localStorage.getItem('productList'))
    : []


const initialState = {
    basketReducer: {
        basket: basketInfosFromStorage,
        loading: false,
        error: null
    }
}

const middleware = [thunk]
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store