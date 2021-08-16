import { render, cleanup } from '@testing-library/react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import { basketReducer } from './store/reducers/basketReducer';
import { productsReducer } from './store/reducers/productsReducer';
import App from './App';


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

test('render App.js with redux', () => {
  renderWithRedux(<App />)
});
