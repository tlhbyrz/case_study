import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import { basketReducer } from '../../store/reducers/basketReducer';
import { productsReducer } from '../../store/reducers/productsReducer';
import Pagination from "./index"


afterEach(cleanup)
const reducer = combineReducers({
  basketReducer,
  productsReducer
})

const middleware = [thunk]
function renderWithRedux(
  component,
  {
    initialState, store = createStore(reducer, initialState, applyMiddleware(...middleware)) 
  } = {}
){
  return {
    ...render( <Provider store={store} >{ component }</Provider> )
  }
}

describe("input tests", () =>{
    test('render Pagination with router and redux', () => {
        const { queryByTestId } = renderWithRedux(<BrowserRouter><Pagination /></BrowserRouter>)
        const backBtn = queryByTestId("back-page-btn");
        const nextBtn = queryByTestId("next-page-btn");
        const pageButtons = queryByTestId("page-buttons");
        expect(backBtn).toBeTruthy()
        expect(nextBtn).toBeTruthy()
        expect(pageButtons).toBeTruthy()
    });

    test('check 3 page exist when created', () => {
        const { queryByTestId } = renderWithRedux(<BrowserRouter><Pagination /></BrowserRouter>)
        const pageButtons = queryByTestId("page-buttons");
        expect(pageButtons).toHaveTextContent("3")
    });
})


