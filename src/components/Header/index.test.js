import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import { basketReducer } from '../../store/reducers/basketReducer';
import { productsReducer } from '../../store/reducers/productsReducer';
import Header from "./index"


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
    test('render Header with router and redux', () => {
        const { queryByTestId } = renderWithRedux(<BrowserRouter><Header /></BrowserRouter>)
        const inputEl = queryByTestId("search-input");
        expect(inputEl).toBeTruthy()
    });

    test('updates onCahange', () => {
      const { queryByTestId } = renderWithRedux(<BrowserRouter><Header /></BrowserRouter>)
      const inputEl = queryByTestId("search-input");
      fireEvent.change(inputEl, { target: { value: "test" } })
      expect(inputEl.value).toBe("test")
  });
})


