import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import cart from "./reducers/cart";

const reducer = combineReducers({
  cart
})

const store = createStore(reducer, applyMiddleware(thunk));

window.store = store;

export default store;
